import { mongooseConnect } from "@/lib/mongoose";
import { Product } from "@/models/Product.models";
import { NextResponse } from "next/server";

export default async function handle(req, res) {
    try {
        await mongooseConnect();
            const ids = req.body.ids;

            res.json(await Product.find({_id: ids}))
    } catch (error) {
        console.error("Error fetching products:", error);
        return NextResponse.json({ error: "Failed to fetch products" }, { status: 500 });
    }
}
