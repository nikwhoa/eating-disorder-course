require('dotenv').config();
const sendpulse = require('sendpulse-api');

const API_USER_ID = process.env.NEXT_PUBLIC_SENDPULSE_USER_ID;
const API_SECRET = process.env.NEXT_PUBLIC_SENDPULSE_SECRET;
const TOKEN_STORAGE = '/tmp/';

sendpulse.init(API_USER_ID, API_SECRET, TOKEN_STORAGE, (token) => {
  if (token && token.is_error) {
    throw new Error('Error: ', token.errors);
  }

  /**
   * Function to process response data
   *
   * @param data
   */
  const answerGetter = function(data) {
    console.log(data);
  };

  sendpulse.addEmails(answerGetter, 238442, [{
    email: 'lig.h.tso.uls7777@gmail.com', variables: {
      'Ім\'я': 'Alex',
      tariff: 'group',
      Phone: '1234567890'
    }
  }]);

  fetch('https://events.sendpulse.com/events/name/purchase_2', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      'email': 'lig.h.tso.uls7777@gmail.com',
      'tariff': 'group'
    })
  }).then((res) => {
    console.log(res);
  });
});
