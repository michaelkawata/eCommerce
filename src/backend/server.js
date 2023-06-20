const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv")

const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")
const productRoute = require("./routes/products")
const cartRoute = require("./routes/cart")
const orderRoute = require("./routes/order")
const stripeRoute = require("./routes/stripe")

const cors = require("cors")
const path = require('path')




dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successful!"))
  .catch((err) => {
    console.log(err)
  });

app.use(cors())
app.use(express.json())
app.use("/api/auth", authRoute)
app.use("/api/users", userRoute)
app.use("/api/products", productRoute)
app.use("/api/carts", cartRoute)
app.use("/api/orders", orderRoute)
app.use("/api/checkout", stripeRoute)

// Serve React App
app.use(express.static(path.join(__dirname, '..', '..', 'dist')));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', '..', 'dist', "index.html"));
});

app.listen(process.env.port || 5000, () => {
  console.log("Backend server is running!")
})
