const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const userRoute = require("./routes/user");
const authRoute = require("./routes/auth");
const multer = require('multer');
const uploadFile = require('./routes/fileUpload')
const cors = require("cors");


mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use('/api/upload', uploadFile);

app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});

app.get('/', (req, res) => {
    res.send('Hello World!')
})