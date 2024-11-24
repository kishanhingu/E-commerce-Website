import { getCartProductFromLocalStorage } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

export const removeProductFromCart = (id) => {
  let cartProducts = getCartProductFromLocalStorage();

  cartProducts = cartProducts.filter((curProduct) => curProduct.id !== id);

  // update data after remove
  localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));

  // remove div on click
  let removeDiv = document.querySelector(`#card${id}`);
  if (removeDiv) {
    removeDiv.remove();
    // show toast when product added to the cart
    showToast("delete", id);
  }

  updateCartValue(cartProducts);
};
