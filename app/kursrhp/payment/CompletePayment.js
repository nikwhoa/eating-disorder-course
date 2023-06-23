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

            // sendEmail(formData.email, formData.name);
            //
            // if (emailStatus === 'sent') {
            //   router.push('/kursrhp/completed');
            // }
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
