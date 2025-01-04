const { Schema } = require("mongoose");
const { StyleRegistry } = require("styled-jsx");

const OrderSchema = new Schema({
    line_items: Object,
    name: String,
    email: String,
    city: String,
    pincode: String,
    streetAddress: String,
    country: String,
    paid: Boolean
}) 

export const Order = models?.Order || model('Order', OrderSchema);