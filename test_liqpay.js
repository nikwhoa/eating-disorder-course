require('dotenv').config();
const LiqPay = require('./liqpay.js')
const liqpay = new LiqPay(`${process.env.NEXT_PUBLIC_LIQPAY_PUBLIC_KEY}`, `${process.env.NEXT_PUBLIC_LIQPAY_PRIVATE_KEY}`);
liqpay.api('request', {
  'action': 'status',
  'version': '3',
  'order_id': 'solo_tariff_test'
}, function(json) {
  console.log(json);
  // console.log(json.status);
});
