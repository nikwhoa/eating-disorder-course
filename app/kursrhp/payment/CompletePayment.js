import Script from "next/script";
import { useEffect, useState } from "react";
import emailTemplate from "@/app/kursrhp/payment/email";
import { Button } from "react-scroll";

const CompletePayment = ({ liqpay, tariff, formData, router }) => {
  const sendEmail = (email, name, tariff, phone) => {
    const mailTemplate = emailTemplate(tariff, name);

    return new Promise((resolve, reject) => {
      // Send email
      fetch(`${process.env.NEXT_PUBLIC_PATH_TO_PAYMENT_API}/api/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          to: `${email}`,
          name: `${name}`,
          tariff: `${tariff}`,
          phone: `${phone}`,
          // subject: 'Вітаємо вас!',
          // text: `Платіж за тариф ${tariff} було виконано. Thank you, ${name}!`,
          // html: mailTemplate
        }),
      })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            resolve("sent"); // Resolve the Promise with 'sent'
          } else {
            reject("error"); // Reject the Promise with 'error'
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          reject("error"); // Reject the Promise with 'error'
        });
    });
  };

  // const sendEmailToSendPulse = async (email, name, tariff, phone) => {
  //   const API_USER_ID = process.env.NEXT_PUBLIC_SENDPULSE_USER_ID;
  //   const API_SECRET = process.env.NEXT_PUBLIC_SENDPULSE_SECRET;

  //   const getToken = async () => {
  //     try {
  //       const response = await fetch('https://api.sendpulse.com/oauth/access_token', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json'
  //         },
  //         body: JSON.stringify({
  //           grant_type: 'client_credentials',
  //           client_id: API_USER_ID,
  //           client_secret: API_SECRET
  //         })
  //       });
  //       const data = await response.json();
  //       return data.access_token;
  //     } catch (error) {
  //       throw new Error(error);
  //     }
  //   };

  //   const sendEmail = async (token) => {
  //     try {
  //       const response = await fetch('https://api.sendpulse.com/addressbooks/238442/emails', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //           'Authorization': `Bearer ${token}`
  //         },
  //         body: JSON.stringify({
  //           emails: [
  //             {
  //               email: req.body.to,
  //               variables: {
  //                 'Імʼя': req.body.name,
  //                 phone: req.body.phone,
  //                 tariff: req.body.tariff
  //               }
  //             }
  //           ]
  //         })
  //       });
  //       if (response.status === 200) {
  //         console.info('Email added successfully');
  //         const eventResponse = await fetch('https://events.sendpulse.com/events/name/purchase_2', {
  //           method: 'POST',
  //           headers: {
  //             'Content-Type': 'application/json',
  //             'Authorization': `Bearer ${token}`
  //           },
  //           body: JSON.stringify({
  //             'email': req.body.to,
  //             'tariff': req.body.tariff
  //           })
  //         });
  //         if (eventResponse.status === 200) {
  //           console.info('Email sent successfully');
  //           res.status(200).send({ message: 'Email sent successfully' });
  //         }
  //       }
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };

  //   try {
  //     const token = await getToken();
  //     await sendEmail(token);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  useEffect(() => {
    window.LiqPayCheckoutCallback = function () {
      LiqPayCheckout.init({
        data: `${liqpay.data}`,
        signature: `${liqpay.signature}`,
        embedTo: "#liqpay_checkout",
        language: "uk",
        mode: "embed", // embed || popup
      })
        .on("liqpay.callback", async function (data) {
          if (data.status === "success" || data.status === "wait_accept") {
            console.log("payment succeed");
            console.log(formData.email);
            console.log(formData.name);

            try {
              const emailStatus = await sendEmail(
                formData.email,
                formData.name,
                tariff,
                formData.phone
              );

              if (emailStatus === "sent") {
                router.push("/kursrhp/completed");
              }
            } catch (error) {
              console.error("Error sending email:", error);
            }

            // try {

            //   async function sendingEmail() {
            //     await sendEmailToSendPulse(formData.email, formData.name, tariff, formData.phone);

            //     //   set timer
            //     setTimeout(() => {
            //       router.push('/kursrhp/completed');
            //     }, [3000]);
            //   }

            //   sendingEmail();

            //   router.push('/kursrhp/completed');
            //   if (emailStatus === 'sent') {
            //   }
            // } catch (error) {
            //   console.error('Error sending email:', error);
            // }

            // sendEmail(formData.email, formData.name);
            //
          }
          console.log(data);
        })
        .on("liqpay.ready", function (data) {
          // ready
          console.log("liqpay ready");
        })
        .on("liqpay.close", function (data) {
          // close
          console.log("liqpay close");
        });
    };
  }, []);

  return (
    <>
      <div>
        <span
          onClick={() =>
            sendEmail(formData.email, formData.name, tariff, formData.phone)
            // sendEmailToSendPulse(
            //   formData.email,
            //   formData.name,
            //   tariff,
            //   formData.phone
            // )
          }
        >
          Pay
        </span>
      </div>
      <Script
        src="//static.liqpay.ua/libjs/checkout.js"
        strategy="lazyOnload"
        onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
        }
      />
      <div id="liqpay_checkout"></div>
    </>
  );
};

export default CompletePayment;
