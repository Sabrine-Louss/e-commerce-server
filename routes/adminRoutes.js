const router = require("express").Router()
const {addProduct, updateProduct,deleteProduct,getOrders}= require("../controllers/adminController")
const {adminMiddleware}= require("../middleware/adminMiddleware")

router.post("/addproduct",adminMiddleware, addProduct)
router.put("/updateproduct/:id",adminMiddleware, updateProduct)
router.delete("/deleteproduct/:id", adminMiddleware,deleteProduct)
router.get("/getorders",adminMiddleware, getOrders)


module.exports= router