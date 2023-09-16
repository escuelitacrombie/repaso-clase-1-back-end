import express from "express";
import productRouter from "./product/controller";
const app = express();

app.use(express.json());

app.use("/product", productRouter);

app.listen(3000, () => {
  console.log("server is running in the port 3000");
});
