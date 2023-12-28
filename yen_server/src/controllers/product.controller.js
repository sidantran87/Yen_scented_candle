const ProductService = require("../services/product.service");

const createProduct = async(req, res) => {
    try {
        const {name, image, type, price, countInStock, rating, description, discount} = newProduct;
        if (!name || !image || !type || !price || !countInStock || !rating){
            return res.status(200).json({
                status: "Err",
                messgae: "Invalid input!"
            });
        }
        const response = await ProductService.createProduct(req.body);

        return res.status(200).json(response);

    } catch (error) {
        res.status(404).json({
            error: error.messgae
        })        
    }
}


exports = [
    createProduct
]