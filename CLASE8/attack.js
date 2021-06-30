const fetch = require('node-fetch');

const data = {
  EMAIL: '1asdad@mail.com',
  ZIPCODE: 'asdasdasd',
  SIGNUP: 'https://www.whitehouse.gov/american-families-plan/',
  SIGNUP_SRC: '',
  LANGUAGE: 'en'
};

setInterval(() => {
  fetch('https://forms.whitehouse.gov/newsletters/subscribe46', {
      method: 'post',
      body:    JSON.stringify(data),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
  })
      .then((response) => response.json())
      .then(console.log)
}, 1000);