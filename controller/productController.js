import Product from "../models/product.js";

export function createProduct(req, res) {

    if(req.user.role != 'admin'){
        res.status(403).json({ error: 'unauthorized you cant add product' });
        return;
    }
    if(!req.user){
        res.status(401).json({ error: 'unauthenticated please login' });
        return;
    }
    const newProduct = new Product(req.body);
    newProduct.save().then(() => {
        res.status(201).json({ message: 'Product created successfully' });
    }).catch((error) => {
        res.status(500).json({ error: 'Failed to create product' });
    });

}

export function getProducts(req, res) {
    Product.find().then((products) => {
        res.status(200).json(products);
    }
    ).catch((error) => {
        res.status(500).json({ error: 'Failed to fetch products' });
    });
}


export function deleteProduct(req, res) {
  if (!req.user) {
    return res.status(401).json({ error: "Unauthenticated, please login" });
  }
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Unauthorized" });
  }
  Product.findOneAndDelete({ productId: req.params.productId })
    .then((deletedProduct) => {
      if (!deletedProduct) {
        return res.status(404).json({ error: "Product not found" });
      }

      res.status(200).json({ message: "Item deleted successfully" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Failed to delete item" });
    });
}


export function updateProduct(req, res) {
  if (!req.user) {
    return res.status(401).json({ error: "Unauthenticated, please login" });
  }
  if (req.user.role !== "admin") {
    return res.status(403).json({ error: "Unauthorized" });
  }
  Product.findOneAndUpdate(
    { productId: req.params.productId },
    req.body,
    { new: true, runValidators: true }
  )
    .then((updatedProduct) => {
      if (!updatedProduct) {
        return res.status(404).json({ error: "Product not found" });
      }
      res.status(200).json({ message: "Product updated successfully" });
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: "Failed to update product" });
    });
}
