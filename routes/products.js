const {Router} = require ("express");
const { getProduct, addProduct, deleteProduct } = require("../controllers/products");
const { verifyToken } = require("../middlewares/auth");
const router = Router();

router.get("/", verifyToken, getProduct )
router.post("/", verifyToken, addProduct)
router.delete("/:id", verifyToken, deleteProduct)


module.exports = router;

