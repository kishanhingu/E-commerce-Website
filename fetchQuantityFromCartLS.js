import { getCartProductFromLocalStorage } from "./getCartProducts";

export const fetchQuantityFromCartLS = (id, price) => {
  let cartProducts = getCartProductFromLocalStorage();

  let existingProduct = cartProducts.find((curPro) => curPro.id === id);
  let quantity = 1;

  if (existingProduct) {
    quantity = existingProduct.quantity;
    price = existingProduct.price;
  }

  return { quantity, price };
};
