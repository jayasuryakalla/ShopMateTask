const express = require("express");
const router = express.Router();
const multer = require("multer");
const {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  generateProductDescription,
  generateDetailsFromImage,
  semanticSearch,
} = require("../controllers/productController");

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

router
  .route("/:id")
  .get(getProductById)
  .put(updateProduct)
  .delete(deleteProduct);

module.exports = router;
