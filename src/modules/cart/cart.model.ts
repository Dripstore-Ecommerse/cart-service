import mongoose from "mongoose";
import toJSON from "../toJSON/toJSON";
import paginate from "../paginate/paginate";
import { ICart, cartModel } from "./cart.interfaces";

const cartSchema = new mongoose.Schema<ICart>(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, required: true },
    items: [
      {
        productId: { type: mongoose.Schema.Types.ObjectId, required: true },
        productVariantId: {
          type: mongoose.Schema.Types.ObjectId,
          required: true,
        },
        quantity: { type: Number, required: true },
      },
    ],
    coupon: { type: mongoose.Schema.Types.ObjectId, default: null },
  },
  {
    timestamps: true,
  }
);

cartSchema.plugin(toJSON);
cartSchema.plugin(paginate);

const cart = mongoose.model<ICart, cartModel>("cart", cartSchema);

export default cart;
