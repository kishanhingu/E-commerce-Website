import { getCartProductFromLocalStorage } from "./getCartProducts";
import { updateCardProductTotal } from "./updateCardProductTotal";

export const incrementDecrement = (event, id, stock, price) => {
  const currentCardElement = document.querySelector(`#card${id}`);
  const productQuantity = currentCardElement.querySelector(".productQuantity");
  const productPrice = currentCardElement.querySelector(".productPrice");

  let quantity = 1;
  let localStoragePrice = 0;

  // Get the data from localStorage
  let localCartProducts = getCartProductFromLocalStorage();
  let existingProd = localCartProducts.find(
    (curProduct) => curProduct.id === id
  );

  if (existingProd) {
    quantity = existingProd.quantity;
    localStoragePrice = existingProd.price;
  } else {
    localStoragePrice = price;
    price = price;
  }

  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
      localStoragePrice = price * stock;
    }
  }

  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }

  //   we will update the price in localStorage
  localStoragePrice = price * quantity;
  localStoragePrice = Number(localStoragePrice.toFixed(2));

  let updateCart = { id, quantity, price: localStoragePrice };

  updateCart = localCartProducts.map((curProduct) => {
    return curProduct.id === id ? updateCart : curProduct;
  });

  // console.log(updateCart);

  localStorage.setItem("cartProductLS", JSON.stringify(updateCart));

  productQuantity.innerText = quantity;
  productPrice.innerText = localStoragePrice;

  // calculating the card total in our cardProduct page
  updateCardProductTotal();
};
