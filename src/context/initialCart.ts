import { products } from "../products";

type cartType = {
  [key: number]: number
}

export const initialCart = () => {
  //set for each item initial value of 0
  let cart : cartType = {};  
  for (let i = 1; i < products.length + 1; i++) {
    cart[i] = 0;
  }

  return cart;
};