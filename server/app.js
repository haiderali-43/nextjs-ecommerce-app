import express from "express";
import dbConfig from "./config/dbConfig.js";
import userRouter from "./routes/userRoutes.js";
import { configDotenv } from "dotenv";
import cors from "cors";
import productRouter from "./routes/productRouter.js";
import brandRouter from "./routes/brandRouter.js";
import categoryRouter from "./routes/categoryRouter.js";
import vendorRouter from "./routes/vendorRouter.js";
import orderRouter from "./routes/orderRouter.js";
import paymentRouter from "./routes/paymentRouter.js";

const app = express();

configDotenv();

//Database connection
dbConfig();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:8000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use('/uploads', express.static('uploads'));

//Routes

app.use("/api/users", userRouter);
app.use("/api/products", productRouter);
app.use('/api/brands', brandRouter);
app.use('/api/categories', categoryRouter);
app.use('/api/vendors', vendorRouter);
app.use('/api/orders', orderRouter);
app.use('/api/payments', paymentRouter);

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to E-commerce API");
});