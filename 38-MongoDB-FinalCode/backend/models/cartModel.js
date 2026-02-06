import { Schema } from "mongoose";
import { model } from "mongoose";

const cartItemSchema = new Schema({
    CourseName: String,
    price: Number,
    quantity: Number
});

const cartSchema = new Schema({
    UserName: {
        type: String,
        required: true,
        unique: true
    },
    items: [cartItemSchema]
});

const Cart = model("Cart", cartSchema);

export default Cart;