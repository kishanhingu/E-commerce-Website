import { getCartProductFromLocalStorage } from "./getCartProducts";

export const updateCardProductTotal = () => {
  let productSubTotal = document.querySelector(".productSubTotal");
  let productFinalTotal = document.querySelector(".productFinalTotal");

  let localCartProducts = getCartProductFromLocalStorage();

  let initialValue = 0;

  let totalProductPrice = localCartProducts.reduce((accum, curProduct) => {
    let productPrice = parseInt(curProduct.price) || 0;
    return accum + productPrice;
  }, initialValue);

  productSubTotal.innerText = `₹${totalProductPrice}`;
  productFinalTotal.innerText = `₹${totalProductPrice + 50}`;
};
