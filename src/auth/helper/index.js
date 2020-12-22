import { API } from "../../backend";
import { emptyCart } from "../../core/helper/cartHelper";

export const signup = (user) => {
  return fetch(`${API}user/`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "content-type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((respose) => {
      return respose.json();
    })
    .catch((err) => console.log(err));
};

export const signin = (user) => {
  const formdata = new FormData();

  for (const name in user) {
    console.log(name, user[name]);
    formdata.append(name, user[name]);
  }

  for (const key in formdata.keys) {
    console.log("MYKEYS: ", key);
  }

  return fetch(`${API}user/login/`, {
    method: "POST",
    body: formdata,
  })
    .then((response) => {
      console.log("SUCCESS", response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const authenticate = (data, next) => {
  if (typeof window !== undefined) {
    localStorage.setItem("jwt", JSON.stringify(data));
    next();
  }
};

export const isAuthenticated = (next) => {
  if (typeof window == undefined) {
    return false;
  }

  if (localStorage.getItem("jwt")) {
    return JSON.parse(localStorage.getItem("jwt"));
    next();
  } else {
    return false;
  }
};

export const signout = (next) => {
  const userId = isAuthenticated() && isAuthenticated().user.id;

  if (typeof window !== undefined) {
    localStorage.removeItem("jwt");
    emptyCart(() => {});

    return fetch(`${API}user/logout/${userId}`, {
      method: "GET",
    })
      .then((respose) => {
        console.log("SignOut Success");
        next();
      })
      .catch((err) => console.log(err));
  }
};
