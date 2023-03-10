import express, { Router } from "express";
import { validate } from "../../modules/validate";
import { cartController, cartValidation } from "../../modules/cart";

const router: Router = express.Router();

router
  .route("/")
  .post(validate(cartValidation.createCart), cartController.createCart)
  .get(validate(cartValidation.getCarts), cartController.getCarts);

router
  .route("/:cartId")
  .get(validate(cartValidation.getCart), cartController.getCart)
  .patch(validate(cartValidation.updateCart), cartController.updateCart)
  .delete(validate(cartValidation.deleteCart), cartController.deleteCart);

export default router;
