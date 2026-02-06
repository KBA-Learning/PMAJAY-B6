import Cart from "../models/cartModel.js"
import { Router } from "express"

const cart = Router();

cart.post("/add-to-cart", async (req, res) => {
    try {
        const { CourseName, Price } = req.body;
        const UserName = req.name;   // from token middleware
        // console.log("UserName in cart route:", UserName);

        if (!CourseName || !Price || !UserName) {
            return res.status(400).json({
                msg: "CourseName, Price and UserName required"
            });
        }

        // Find user cart
        let cart = await Cart.findOne({ UserName });

        // If cart doesn't exist → create one
        if (!cart) {
            cart = new Cart({
                UserName,
                items: [{ CourseName, Price, quantity: 1 }]
            });
        }
        else {
            // Check if item already exists
            const itemIndex = cart.items.findIndex(
                item => item.CourseName === CourseName
            );

            if (itemIndex > -1) {
                // Increase quantity
                cart.items[itemIndex].quantity += 1;
            } else {
                // Add new item
                cart.items.push({ CourseName, Price, quantity: 1 });
            }
        }

        await cart.save();

        res.status(200).json({
            msg: "Item added to cart",
            cart: cart.items
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Something went wrong" });
    }
});

cart.get("/get-cart", async (req, res) => {
    try {
        const UserName = req.name;   // coming from auth middleware

        if (!UserName) {
            return res.status(400).json({ msg: "User not identified" });
        }

        const cart = await Cart.findOne({ UserName });

        // If cart not created yet
        if (!cart) {
            return res.status(200).json({
                msg: "Cart is empty",
                cart: []
            });
        }

        res.status(200).json({
            msg: "Cart fetched successfully",
            cart: cart.items
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "Something went wrong" });
    }
});

export default cart;