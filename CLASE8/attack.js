const fetch = require('node-fetch');

const data = {
  EMAIL: '1asdad@mail.com',
  ZIPCODE: '7898456',
  SIGNUP: 'https://www.whitehouse.gov/american-families-plan/',
  SIGNUP_SRC: '',
  LANGUAGE: 'en'
};

setInterval(() => {
  const date = new Date();
  const test = date.toLocaleTimeString().split(':')[2].split(' ')[0];
  fetch("https://forms.whitehouse.gov/newsletters/subscribe46", {
    "headers": {
      "accept": "*/*",
      "accept-language": "es-419,es;q=0.9",
      "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
      "sec-ch-ua": "\" Not;A Brand\";v=\"99\", \"Google Chrome\";v=\"91\", \"Chromium\";v=\"91\"",
      "sec-ch-ua-mobile": "?0",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site"
    },
    "referrer": "https://www.whitehouse.gov/",
    "referrerPolicy": "strict-origin-when-cross-origin",
    "body": `EMAIL=as${test}d%40maeil.com&ZIPCODE=78870&b_4da4828d48b4efa4fc1138955_8cafb01033=&SIGNUP=https%3A%2F%2Fwww.whitehouse.gov%2Fcontact%2F&SIGNUP_SRC=&LANGUAGE=en`,
    "method": "POST",
    "mode": "cors"
  })
    .then((response) => response.json())
    .then((data) => console.log(data))
}, 1000);
