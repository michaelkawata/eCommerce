require('dotenv').config()
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const productRoute = require("./routes/products");
const cartRoute = require("./routes/cart");
const cors = require("cors");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 5000;
const path = require('path')

app.use(express.static(path.join(__dirname, '..', '..', 'dist')));

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfull!"))
  .catch((err) => {
    console.log(err);
  });

app.use(cors());
app.use(express.json());
app.use("/auth", authRoute);
app.use("/users", userRoute);
app.use("/products", productRoute);
app.use("/carts", cartRoute);

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true })); // new code from stackoverflow
app.use(express.json()); // new code from stackoverflow

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', '..', 'dist', "index.html"));
});


// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
