import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    productId: {
      type: String,
      required: true,
      unique: true
    },
    
    name: {
      type: String,
      required: true,
      trim: true
    },

    altName: {
      type: [String],
      default: []
    },

    description: {
      type: String,
      required: true
    },

    price: {
      type: Number,
      required: true,
      min: 0
    },

    quantity: {
      type: Number,
      required: true,
      min: 0
    },

    category: {
      type: String,
      required: true
    },

    image: {
      type: [String], // image URL
      required: true,
        default: ["https://cdn.shopify.com/s/files/1/0863/7906/9713/articles/dior_beauty_5-makeup-essentials1_67abf4e5-56e7-40ef-9e90-3f53513b4c9a.jpg?v=1723112086&width=1600&height=1280&crop=center"]
    }
});

const Product = mongoose.model('Product', productSchema); 
export default Product;
