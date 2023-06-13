import Script from 'next/script';
import { useEffect, useState } from 'react';
import { toBase64 } from 'request/lib/helpers';
import crypto from 'crypto';

// TODO: CHANGE ORDER_ID!!!!!!

const CompletePayment = ({ liqpay, tariff, price, formData, router }) => {
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
          router.push('/kursrhp/completed');
          // TODO: send email!
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
    <Script
      src='//static.liqpay.ua/libjs/checkout.js'
      strategy='lazyOnload'
      onLoad={() =>
        console.log(`script loaded correctly, window.FB has been populated`)
      }
    />
    <div id='liqpay_checkout'></div>
</>
)
  ;
};

export default CompletePayment;