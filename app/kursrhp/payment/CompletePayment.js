import Script from 'next/script';
import { useEffect, useState } from 'react';
import { toBase64 } from 'request/lib/helpers';
import crypto from 'crypto';

// TODO: CHANGE ORDER_ID!!!!!!

const CompletePayment = ({ liqpay, tariff, price, formData }) => {

  // const [jsonString, setJsonString] = useState({});
  // const [liqpay, setLiqpay] = useState({});
  const [isPaymentCompleted, setPaymentCompleted] = useState(false);

  // const liqpay = {
  //   data: toBase64(JSON.stringify(jsonString)),
  //   signature: crypto.createHash('sha1').update(`${process.env.NEXT_PUBLIC_LIQPAY_PRIVATE_KEY}${toBase64(JSON.stringify(jsonString))}${process.env.NEXT_PUBLIC_LIQPAY_PRIVATE_KEY}`).digest('base64')
  // };


  // if (tariff === 'group') {
  //   liqpay.data = process.env.NEXT_PUBLIC_GROUP_TARIFF_DATA;
  //   liqpay.signature = process.env.NEXT_PUBLIC_GROUP_TARIFF_SIGNATURE;
  //
  // }
  //
  // if (tariff === 'with-psychologist') {
  //   liqpay.data = process.env.NEXT_PUBLIC_WITH_PSYCHOLOGIST_TARIFF_DATA;
  //   liqpay.signature = process.env.NEXT_PUBLIC_WITH_PSYCHOLOGIST_TARIFF_SIGNATURE;
  //
  // }
  //
  // if (tariff === 'with-dasha') {
  //   liqpay.data = process.env.NEXT_PUBLIC_WITH_DASHA_TARIFF_DATA;
  //   liqpay.signature = process.env.NEXT_PUBLIC_WITH_DASHA_TARIFF_SIGNATURE;
  // }


  useEffect(() => {
    window.LiqPayCheckoutCallback = function() {
      LiqPayCheckout.init({
        data: `${liqpay.data}`,
        signature: `${liqpay.signature}`,
        embedTo: '#liqpay_checkout',
        language: 'uk',
        mode: 'embed' // embed || popup
      }).on('liqpay.callback', function(data) {
        console.log(data.status);
        if (data.status === 'success') {
          console.log(formData.email);
          console.log(formData.name);
          // send email!
          setPaymentCompleted(true);
        }
        console.log(data);
      }).on('liqpay.ready', function(data) {
        // ready
        console.log('liqpay ready');
      }).on('liqpay.close', function(data) {
        // close
        console.log('liqpay close');
      });
    };
  }, []);

  return (
    <>
    {isPaymentCompleted ? (<div>
      <h1>
        Вітаю, скоро вам прийде лист з усіми інструкціями. Якщо його немає у вашому інбоксі, перевірте папку СПАМ.
      </h1>
    </div>) : (
      <>
        <Script
          src='//static.liqpay.ua/libjs/checkout.js'
          strategy='lazyOnload'
          onLoad={() =>
            console.log(`script loaded correctly, window.FB has been populated`)
          }
        />
        <div id='liqpay_checkout'></div>
      </>
    )}
    </>
  );
};

export default CompletePayment;