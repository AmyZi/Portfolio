const express = require("express");
const app = express();
require("dotenv").config();
const dbconfig = require("./config/dbConfig");
const cors = require("cors");
app.use(cors());

const portfolioRoute = require("./routes/portfolioRoute");

app.use(express.json()); 

app.use("/api/portfolio", portfolioRoute);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is listening on port ${port}`); // Use the specific port value
});
 