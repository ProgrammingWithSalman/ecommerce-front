import mongoose from "mongoose";
import { Schema } from "mongoose";

const ProductSchema = new Schema({
    title: {type: String, required: true},
    description: String, 
    price: {type: String, required: true}, 
    images:[{type: String}],
    category: {type: mongoose.Types.ObjectId, ref:"Category"},
    properties: {type: Object}
}, {timestamps: true})

export const Product = mongoose.models.Product || mongoose.model("Product", ProductSchema)