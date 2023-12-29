const express = require("express");
const app = express();
const port = 3888;

// check port
app.listen(port, () => {
  console.log("my server is listening on port: ", port);
});

// enable CORS
const cors = require("cors");
app.use(cors());

// body-parser
const bodyParser = require("body-parser");
app.use(bodyParser.json());

// limit
app.use(express.json({ limit: "50mb" }));

app.use(express.urlencoded({ limit: "50mb", extended : true }));

// enable cookie
const cookieParser = require("cookie-parser");
app.use(cookieParser());

// test
// app.get("/", (req, res) => {
//     return res.send("Welcome to Yen Scented Candle Server")
// })

// // routes -
const routes = require("./src/router/index");
routes(app);

// enable Morgan
const morgan = require("morgan");
app.use(morgan("combined"));

// connectDB
const db = require("./src/config/db");
db.connect();
