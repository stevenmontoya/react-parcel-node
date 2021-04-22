const express = require("express");
const app = express();
const cors = require("cors");

const whitelist = ["http://localhost:1234"];
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
};

require("./db.config");
app.use(express.json());
app.options("*", cors());
app.use(cors());
app.use(require("./routes"));
app.listen(3000);
