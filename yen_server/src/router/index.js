const ProductRouter = require("./productRouter");
const UserRouter = require("./userRouter");
const OrderRouter = require("./orderRouter");

const routes = (app) => {
  app.use("/api/product", ProductRouter);
  app.use("/api/user", UserRouter);
  app.use("/api/order", OrderRouter);
};

module.exports = routes;
