const express = require("express");
var cors = require("cors");
const compression = require('compression')
const routes = require("./routes");

const swaggerUi = require("swagger-ui-express");
const YAML = require("yamljs");
swaggerDocument = YAML.load("./swagger_aws.yaml");

const dontSniffMimetype = require("dont-sniff-mimetype");

const app = express();

app.use(cors());
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(dontSniffMimetype());

app.use((_, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Max-Age", "7200");  
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.header(
    "Access-Control-Allow-Headers",
    "Authorization,Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token"
  );
  app.use(cors());
  next();
});

app.use((_, res, next) => {
  res.set('X-Powered-By', 'PHP/7.1.7');
  next();
});

routes(app);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(process.env.APP_PORT || 3000, () => {})
