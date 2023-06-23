require('dotenv').config();
const sendpulse = require('sendpulse-api');

const API_USER_ID = process.env.NEXT_PUBLIC_SENDPULSE_USER_ID;
const API_SECRET = process.env.NEXT_PUBLIC_SENDPULSE_SECRET;
const TOKEN_STORAGE = '/tmp/';

const getEmails = (token) => {
  fetch('https://api.sendpulse.com/addressbooks/238442/emails', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    }
  }).then((res) => {
    if (res.statusText === 'OK') {
      res.json().then((data) => {
        console.log(data.reverse());
      });
    }
  });
};

const addEmail = (token, email, name, phone, tariff) => {
  return new Promise((resolve, reject) => {
    fetch('https://api.sendpulse.com/addressbooks/238442/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
      body: JSON.stringify({
        emails: [
          {
            email: email,
            variables: {
              name: name,
              phone: phone,
              tariff: tariff
            }
          }
        ]
      })
    }).then((res) => {
      if (res.statusText === 'OK') {
        resolve(res); // Resolve the Promise with the response object
      } else {
        reject(new Error('Email could not be added')); // Reject the Promise with an error
      }
    }).catch((error) => {
      reject(error); // Reject the Promise if there's an error during the fetch request
    });
  });
};

const sendEmail = (token, email, tariff) => {
  fetch('https://events.sendpulse.com/events/name/purchase_2', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      'email': `"${email}"`,
      'tariff': `"${tariff}"`
    })
  }).then((res) => {
    if (res.statusText === 'OK') {
      console.log(res.statusText);
    }
  }).catch((err) => {
    console.log(err);
  });
};

const deleteEmail = (token, email) => {
  fetch('https://api.sendpulse.com/addressbooks/238442/emails', {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: JSON.stringify({
      emails: [email]
    })
  }).then((res) => {
    if (res.statusText === 'OK') {
      res.json().then((data) => {
        console.log(data);
      });
    }
  });
};

const authorize = () => {
  return new Promise((resolve, reject) => {
    fetch('https://api.sendpulse.com/oauth/access_token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          grant_type: 'client_credentials',
          client_id: API_USER_ID,
          client_secret: API_SECRET
        })
      }
    ).then(res => res.json()).then((data) => {
      resolve(data.access_token);
    }).catch((error) => {
      reject(error); // Reject the Promise if there's an error during the fetch request
    });
  });


  // fetch('https://api.sendpulse.com/oauth/access_token', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({
  //       grant_type: 'client_credentials',
  //       client_id: API_USER_ID,
  //       client_secret: API_SECRET
  //     })
  //   }
  // ).then(res => res.json()).then((data) => {
  //
  //   /*
  //   * Add emails to book and send confirmation email
  //   * */
  //   addEmail(data.access_token, email, name, phone).then((res) => {
  //     sendEmail(data.access_token, email, tariff);
  //   }).then(() => {
  //     getEmails(data.access_token);
  //   });
  //
  //
  //   /*
  //   * Delete email from book
  //   * */
  //   // deleteEmail(data.access_token, email);
  //
  //
  //   /*
  //   * Get emails from book
  //   * */
  //   // getEmails(data.access_token);
  // });
};

const sendPulse = {
  getEmailsList: async (data) => {
    getEmails(await authorize());
  },
  addEmail: async (email, name, phone, tariff) => {
    addEmail(await authorize(), email, name, phone, tariff);
  },
  sendEmail: async (email, tariff) => {
    const token = await authorize();
    return new Promise((resolve, reject) => {
      fetch('https://events.sendpulse.com/events/name/purchase_2', {
      // fetch('https://api.sendpulse.com/addressbooks/238442/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          'email': `"${email}"`,
          'tariff': `"${tariff}"`
        })
      }).then((res) => {
        if (res.statusText === 'OK') {
          resolve(res); // Resolve the Promise with the response object
        } else {
          reject(new Error('Email could not be added')); // Reject the Promise with an error
        }
      }).catch((error) => {
        reject(error); // Reject the Promise if there's an error during the fetch request
      });
    });
  },
  deleteEmail: async (email) => {
    deleteEmail(await authorize(), email);
  }
};
// sendPulse.deleteEmail('norenkonikita.solo@gmail.com').then((res) => {
//   sendPulse.getEmailsList();
// });
sendPulse.addEmail('norenkonikita1@gmail.com', 'Нікіта', '09334343434', 'group').then((res) => {
  // sendPulse.sendEmail('norenkonikita@gmail.com', 'solo').then((res) => {
  //   console.log(res.statusText);
  // }).then(() => {
  //   sendPulse.getEmailsList();
  // })
})
// sendPulse.addEmail('lightsouls7777@gmail.com', 'Alex', '09334343434', 'with-psychologist').then((res) => {
//   sendPulse.sendEmail('lightsouls7777@gmail.com', 'group').then((res) => {
//     console.log(res.statusText);
//   })
// })
// sendPulse.sendEmail('norenkonikita.solo@gmail.com', 'Нікіта', '09334343434', 'solo');
// sendPulse.getEmailsList();
// sendDataToPulse.getEmailsList();
// sendDataToPulse('norenko.nikita.with-dasha@gmail.com')
// sendDataToPulse('norenko.nikita.with-dasha@gmail.com', 'Нікіта', '09334343434', 'with-dasha');


/*
 * Send to events
 * */
// fetch('https://events.sendpulse.com/events/id/cc85f68def0644458efc4e868be1bc5b/8187224', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${data.access_token}`
//   },
//   body: JSON.stringify({
//     email: 'twochina@yahoo.com',
//     phone: '380632727700',
//     // variables: { 'Ім\'я': 'Нікіта', tariff: 'with-dasha' }
//   })
// }).then((res) => {
//   if (res.statusText === 'OK') {
//     sendpulse.init(API_USER_ID, API_SECRET, TOKEN_STORAGE, (token) => {
//       sendpulse.getEmailsFromBook((data) => {
//         console.log(data.reverse());
//       }, 238442);
//     });
//   }
// });

/*
* Another send method
* */

// fetch('https://events.sendpulse.com/events/name/purchase_2', {
//   method: 'POST',
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${data.access_token}`
//   },
//   body: JSON.stringify({
//     'email': 'norenko.nikita@gmail.com',
//     'phone': '09334343434',
//     'tariff': 'with-dasha'
//   })
// }).then((res) => {
//     if (res.statusText === 'OK') {
//       sendpulse.init(API_USER_ID, API_SECRET, TOKEN_STORAGE, (token) => {
//         sendpulse.getEmailsFromBook((data) => {
//           console.log(data.reverse());
//         }, 238442);
//       });
//     }
// }).catch((err) => {
//   console.log(err);
// });

// sendpulse.init(API_USER_ID, API_SECRET, TOKEN_STORAGE, (token) => {
//   if (token && token.is_error) {
//     console.error('Error: ', token.errors);
//   }
//
//   //   /**
//   //    * Function to process response data
//   //    *
//   //    * @param data
//   //    */
//   const answerGetter = function (data) {
//     console.log(data);
//   };
//
//   // sendpulse.getBookInfo(answerGetter, 238442);
//
//   // sendpulse.editAddressBook((data) => {
//   //   console.log(data);
//   // }, 238442, 'РХП');
//

//
//   // sendpulse.addEmails(
//   //   () => {
//   //     // get list of emails
//   //     sendpulse.getEmailsFromBook((data) => {
//   //       const email = data.reverse();
//   //       console.log(email);
//   //     }, 238442);
//   //   },
//   //   238442,
//   //   [
//   //     {
//   //       email: 'norenkonikita@gmail.com',
//   //       variables: {
//   //         name: 'Nikita',
//   //         tariff: 'solo',
//   //         Phone: '380632727700',
//   //       },
//   //     },
//   //   ]
//   // );
//
//
//
//   // sendpulse.smtpSendMail(
//   //   (data) => {
//   //     console.log(data);
//   //   },
//   //   {
//   //     html: '<h1>hello</h1',
//   //     text: 'Hello',
//   //     subject: 'test',
//   //     from: {
//   //       name: 'Даша Харченко',
//   //       email: 'no-reply@harchenko.com.ua',
//   //     },
//   //     to: [
//   //       {
//   //         name: 'Nikita',
//   //         email: 'norenko.nikita@gmail.com',
//   //       },
//   //     ],
//   //   }
//   // );

// sendpulse.getEmailsFromBook((data) => {
//   console.log(data.reverse());
// }, 238442);

// })
// ;
