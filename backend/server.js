const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routes/auth.routes");
const corsMiddleware = require("./middleware/cors.middleware");

require("dotenv").config(); // Загрузка переменных окружения из .env файла

const app = express();
const port = process.env.PORT || 5000;

app.use(corsMiddleware);
app.use(express.json());
app.use("/api/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to the database");
    
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  } catch (e) {
    console.error('Failed to connect to the database', e);
    // Завершение процесса, если не удалось подключиться к базе данных
    process.exit(1);
  }
};

start();
