import { getCartProductFromLocalStorage } from "./getCartProducts";

export const incrementDecrement = (event, id, stock, price) => {
  const currentCardElement = document.querySelector(`#card${id}`);
  //   console.log(currentCardElement);

  const productQuantity = currentCardElement.querySelector(".productQuantity");
  //   console.log(productQuantity.innerText);

  // Get LocalStorage data
  let cartProducts = getCartProductFromLocalStorage();

  let quantity = Number(productQuantity.innerText);

  if (event.target.className === "cartIncrement") {
    if (quantity < stock) {
      quantity += 1;
    } else if (quantity === stock) {
      quantity = stock;
    }
  }
  productQuantity.innerText = quantity;

  if (event.target.className === "cartDecrement") {
    if (quantity > 1) {
      quantity -= 1;
    }
  }
  productQuantity.innerText = quantity;
  price = Number((price * quantity).toFixed(2));

  currentCardElement.querySelector(".productPrice").innerText = price;

  cartProducts = cartProducts.map((curPro) => {
    if (curPro.id === id) {
      curPro.quantity = quantity;
      curPro.price = price;
    }
    return curPro;
  });
  console.log(cartProducts);

  localStorage.setItem("cartProductLS", JSON.stringify(cartProducts));
};
