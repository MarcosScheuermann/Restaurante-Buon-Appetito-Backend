const {Router} = require ("express");
const { getProduct } = require("../controllers/products");
const { verifyToken } = require("../middlewares/auth");
const router = Router();

router.get("/", verifyToken, getProduct )

module.exports = router;

