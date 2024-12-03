const Product = require("../models/productSchema")
const Order = require("../models/orderSchema")



const addProduct = async(req,res)=>{
    try{
        const {title,description,price,poster}= req.body
        const newProduct = await Product.create(req.body)
        res.status(201).json({msg:"product created!", product:newProduct})
        }
    
    catch(err){
        res.status(500).json({msg:"something wront wrong ", error:err.message})
    }
}
const updateProduct = async(req,res)=>{
    try{
        
        const updateProduct = await Product.findByIdAndUpdate(req.params.id,{...req.body})
        res.status(201).json({msg:"product updated!", product:updateProduct})
        }
    
    catch(err){
        res.status(500).json({msg:"something wront wrong ", error:err.message})
    }
}

const deleteProduct = async(req,res)=>{
    try{
        
        const deleteProduct = await Product.findByIdAndDelete(req.params.id)
        res.status(201).json({msg:"product deleted!", product:deleteProduct})
        }
    
    catch(err){
        res.status(500).json({msg:"something wront wrong ", error:err.message})
    }
}

const getOrders = async(req,res)=>{
    try{
        const getOrders = await Order.find()
        res.status(201).json({msg:"orders found successfully!", orders:getOrders})
        }
    
    catch(err){
        res.status(500).json({msg:"something wront wrong ", error:err.message})
    }
}



module.exports={addProduct,updateProduct,deleteProduct,getOrders} // updateProduct,deleteProduct,getOrders