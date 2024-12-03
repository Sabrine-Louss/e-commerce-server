const jwt= require("jsonwebtoken")

module.exports.authMiddleware=async(req,res,next)=>{
    try{
        const token = req.headers.token
        if(!token) return res.status(401).json({msg:"not authorized"})
        else{
            const verifyToken = jwt.verify(token, process.env.JWT_SECRET )
            req.userId= verifyToken.id
            next()

        }
    }
    catch(err){
        res.status(500).json({msg:"something wront wrong ", error:err.message})
    }
}