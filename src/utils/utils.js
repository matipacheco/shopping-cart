import axios from "axios";

const url = "localhost:300/products";

export function getItemsFromAPI() {
  return axios(url);
}