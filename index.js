import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import studentRouter from './routes/studentRouter.js';
import itemRouter from './routes/itemRouter.js';
import userRouter from './routes/userRouter.js';
import productRouter from './routes/productRouter.js';
import { verifyJwt } from './middleware/auth.js';

const app = express();

mongoose.connect('mongodb+srv://admin:vyiQdlnbOzHezAMa@cluster0.fz2jzcs.mongodb.net/?appName=Cluster0').then(() => {
    console.log("✅ Database connected successfully");
  })
  .catch((error) => {
    console.error("❌ Database connection failed");
    console.error(error.message);
  });

//vyiQdlnbOzHezAMa
//admin
//mongodb+srv://admin:vyiQdlnbOzHezAMa@cluster0.fz2jzcs.mongodb.net/?appName=Cluster0


app.use(bodyParser.json());

// Middleware to extract user from JWT token

app.use(verifyJwt);

app.use("/api/student", studentRouter);
app.use("/api/item", itemRouter);
app.use("/api/user", userRouter);
app.use("/api/product", productRouter);




app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
