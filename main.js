// CSS file link
import "./style.css";
// json File link
import products from "./api/product.json";
import { showProductContainer } from "./homeProductCards";

// Define a function named `showProductContainer` that takes an array of products as input.
showProductContainer(products);
