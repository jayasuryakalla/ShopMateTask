const express = require("express");
<<<<<<< HEAD
const multer = require("multer");
const router = express.Router();
=======
const router = express.Router();
const multer = require("multer");
>>>>>>> 8f2c80dec57338e578dbe92e8ce8f266c78eabb5
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
<<<<<<< HEAD
  generateDescription,
=======
  generateProductDescription,
>>>>>>> 8f2c80dec57338e578dbe92e8ce8f266c78eabb5
  generateDetailsFromImage,
  semanticSearch,
} = require("../controllers/productController");

<<<<<<< HEAD
router.get("/search/semantic", semanticSearch);

router.route("/").get(getProducts).post(createProduct);

=======
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

router.route("/").get(getProducts).post(createProduct);

router.route("/search/semantic-search").get(semanticSearch);

router.post("/generate-description", generateProductDescription);

router
  .route("/generate-details-from-image")
  .post(upload.single("image"), generateDetailsFromImage);

>>>>>>> 8f2c80dec57338e578dbe92e8ce8f266c78eabb5
router
  .route("/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

<<<<<<< HEAD
router.post("/generate-description", generateDescription);

// --- Middleware Configuration ---
const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
});

router
  .route("/generate-details-from-image")
  .post(upload.single("image"), generateDetailsFromImage);

=======
>>>>>>> 8f2c80dec57338e578dbe92e8ce8f266c78eabb5
module.exports = router;
