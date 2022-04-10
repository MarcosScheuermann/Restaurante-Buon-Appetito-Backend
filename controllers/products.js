exports.getProduct = async (req, res)=>{
    try {
       const id = req.productId;
       const user = await User.findById(id);
       if(user.role === "ADMIN"){
         const products = await product.find();
         res.status(200).json({ ok: true, products: products });
    }else{
        res.status(404).json({ok:false, mensaje:"No tiene permisos"})
    }
    } catch (error) {
        console.log(error);
        res.status(400).json({ok:false, mensaje:"Ocurrio un Error"})
    }
}