const express = require('express');
const helmet = require('helmet');
const rateLimit = require("express-rate-limit");
const swaggerUi = require('swagger-ui-express');
// const swaggerDocument = require('./foro.json');

const YAML = require('yamljs');
const swaggerDocument = YAML.load('./foro.yml');


const app = express();
const port = 3000;

app.use(helmet());


// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
// see https://expressjs.com/en/guide/behind-proxies.html
// app.set('trust proxy', 1);

const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minutes
  max: 5 // limit each IP to 100 requests per windowMs
});

//  apply to all requests
// app.use(limiter);


app.get('/demo', limiter, function (req, res) {
  res.send('ok');
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));


app.listen(port, () => {
  console.log(`Server listeting on port ${port}`)
});