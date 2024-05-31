const express = require("express");
const mongoose = require("mongoose");
const authRouter=require("./routes/auth.routes")
const corsMiddleware=require("./middleware/cors.middleware")

require("dotenv").config(); // Загрузка переменных окружения из .env файла

const app = express();
const port = process.env.PORT || 5000;

app.use(corsMiddleware)
app.use(express.json())
app.use("/api/auth", authRouter)

const start = async () => {
   
  try {
     mongoose.connect(process.env.MONGODB_URI) 
    app.listen(port, () => {
      console.log(`server is run on ${port}`);
    });
  } catch (e) {
    console.error('Failed to connect to the database', e);
  }
};
start();


