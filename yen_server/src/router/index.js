const ProductRouter = require("./productRouter");
const UserRouter = require("./userRouter")

const routes = (app) => {
    // app.use('/api/product', ProductRouter)
    app.use('/api/product', ProductRouter)
    app.use('/api/user', (req, res) => {
        res.send("hello")
    })
}

module.exports = routes