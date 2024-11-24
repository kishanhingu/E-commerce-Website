let addToCartButton = document.querySelector(".add-to-cart-button");
let getLocalStorageData = localStorage.getItem("cartProductLS");
getLocalStorageData = JSON.parse(getLocalStorageData);
addToCartButton.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> ${getLocalStorageData.length}`;
console.log(addToCartButton);