const ProductRouter = require("./productRouter");

const routes = (app) => {
    app.use("/api/product", ProductRouter)
}

module.exports = routes