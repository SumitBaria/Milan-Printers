import { API } from "../../backend";

export const getProduct = () => {
  return fetch(`${API}product/`, {method: "GET"})
  .then(response => {
      return response.json();
  })
  .catch(err => console.log(err))
}

export const getOwner = () => {
  return fetch(`${API}owner/`, {method: "GET"})
  .then(response => {
      return response.json();
  })
  .catch(err => console.log(err))
}
