import { Document, Model, Schema } from "mongoose";
import { QueryResult } from "../paginate/paginate";

interface ICartItem {
  productId: string; // ID of the product
  productVariantId: string; // ID of the product variant
  quantity: number; // quantity of the product variant in the cart
}

export interface ICart extends Document {
  userId: Schema.Types.ObjectId; // ID of the user who owns the cart
  items: ICartItem[]; // list of items in the cart
  coupon: Schema.Types.ObjectId | null; // ID of the coupon applied to the cart
}

export interface cartModel extends Model<ICart> {
  paginate(
    filter: Record<string, any>,
    options: Record<string, any>
  ): Promise<QueryResult>;
}

export type UpdateCartBody = Partial<ICart>;

// export type NewRegisteredCart = Omit<ICart, "updatedAt" | "slug">;
export type NewRegisteredCart = ICart;

// export type NewCreatedCart = Omit<ICart, "updatedAt">;
export type NewCreatedCart = ICart;
