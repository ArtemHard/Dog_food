import { API_TOKEN, PATH } from "./constants";

const responseHandler = (res) => {
  return res.ok
    ? res.json()
    : Promise.reject(`Ошибка ${res.status} потому-что ${res.statusText}`);
};

class Api {
  constructor(path, token) {
    this.path = path;
    this.token = token;
  }
  getProductList() {
    return fetch(`${this.path}products `, {
      headers: {
        authorization: `Bearer ${this.token}`,
      },
    }).then(responseHandler);
  }
  getSingleProduct(id) {
    return fetch(`${this.path}products/${id} `, {
      headers: {
        authorization: `Bearer ${this.token}`,
      },
    }).then(responseHandler);
  }
  /*
  createProduct(data) {
    return fetch(`${this.path}products`, {
      method: "POST",
      headers: {
        authorization: `Bearer ${this.token}`,
        "Content-Type": JSON.stringify(data)
      },
    })
  }*/
}

const api = new Api(PATH, API_TOKEN);

export default api;
