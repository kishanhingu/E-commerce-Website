import products from "./api/productc.json";
import { fetchQuantityFromCartLS } from "./fetchQuantityFromCartLS";
import { getCartProductFromLocalStorage } from "./getCartProducts";
import { incrementDecrement } from "./incrementDecrement";
import { removeProductFromCart } from "./removeProductFromCart";
import { updateCardProductTotal } from "./updateCardProductTotal";

// Get LocalStorage data
let cartProducts = getCartProductFromLocalStorage();

let filterProducts = products.filter((curProduct) => {
  return cartProducts.some((curEle) => curEle.id === curProduct.id);
});
// console.log(filterProducts);

// to update the addToCart page
const cartElement = document.querySelector("#productCartContainer");
const templateContainer = document.querySelector("#productCartTemplate");

// show the cartProducts
const showCartProduct = () => {
  filterProducts.forEach((curProduct) => {
    // console.log(curProduct);
    const { category, id, image, name, stock, price } = curProduct;

    let productClone = document.importNode(templateContainer.content, true);

    //get lolacStorage Actual data
    const localStorage = fetchQuantityFromCartLS(id, price);

    productClone.querySelector("#cardValue").setAttribute("id", `card${id}`);
    productClone.querySelector(".category").textContent = category;
    productClone.querySelector(".productImage").src = image;
    productClone.querySelector(".productImage").alt = name;
    productClone.querySelector(".productName").textContent = name;

    productClone.querySelector(".productQuantity").textContent =
      localStorage.quantity;
    productClone.querySelector(".productPrice").textContent =
      localStorage.price;

    // handle increment and decrement button
    productClone
      .querySelector(".stockElement")
      .addEventListener("click", (event) => {
        incrementDecrement(event, id, stock, price);
      });

    // remove button
    productClone
      .querySelector(".remove-to-cart-button")
      .addEventListener("click", () => removeProductFromCart(id));

    cartElement.append(productClone);
  });
};

// Show the cart product
showCartProduct();

// calculating the card total in our cardProduct page
updateCardProductTotal();