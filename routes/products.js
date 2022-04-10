const {Router} = require ("express");
const { getProduct, addProduct } = require("../controllers/products");
const { verifyToken } = require("../middlewares/auth");
const router = Router();

router.get("/", verifyToken, getProduct )
router.post("/", verifyToken, addProduct)


module.exports = router;

