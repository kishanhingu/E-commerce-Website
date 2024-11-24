import { getCartProductFromLocalStorage } from "./getCartProducts";
import { showToast } from "./showToast";
import { updateCartValue } from "./updateCartValue";

getCartProductFromLocalStorage();

export const addToCart = (event, id, stock) => {
  let arrLocalStorageProduct = getCartProductFromLocalStorage();

  const currentProductElement = document.querySelector(`#card${id}`);
  //   console.log(currentProductElement);

  let quantity =
    currentProductElement.querySelector(".productQuantity").innerText;
  let price = currentProductElement.querySelector(".productPrice").innerText;

  let existingProduct = arrLocalStorageProduct.find(
    (curProduct) => curProduct.id === id
  );

  if (existingProduct && quantity > 1) {
    quantity = existingProduct.quantity + Number(quantity);
    price = Number(price.replace("₹", "") * quantity).toFixed(2);

    let updateCart = { id, quantity, price };

    updateCart = arrLocalStorageProduct.map((curPro) => {
      return curPro.id === id ? updateCart : curPro;
    });
    console.log(updateCart);

    localStorage.setItem("cartProductLS", JSON.stringify(updateCart));

    // show toast when product added to the cart
    showToast("add", id);
  }

  if (existingProduct) {
    // alert("Product has already Existing");
    return false;
  }

  price = Number(price.replace("₹", "") * quantity);
  //   price = price * quantity;
  quantity = Number(quantity);

  //   let updateCart = { id, quantity, price };
  arrLocalStorageProduct.push({ id, quantity, price });
  localStorage.setItem("cartProductLS", JSON.stringify(arrLocalStorageProduct));
  //   console.log(quantity, price);

  //   update the cart button value
  updateCartValue(arrLocalStorageProduct);

  // show toast when product added to the cart
  showToast("add", id);
};
