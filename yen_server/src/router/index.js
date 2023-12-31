const ProductRouter = require("./productRouter");
// const UserRouter = require("./userRouter")

const routes = (app) => {
    // app.use('/api/product', ProductRouter)
    app.use('/api/product', ProductRouter)
    // app.use('/api/user', UserRouter)
}

module.exports = routes