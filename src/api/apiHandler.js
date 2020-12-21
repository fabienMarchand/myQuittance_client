import axios from "axios";

const service = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
  withCredentials: true, // Cookie is sent to client when using this service. (used for session)
});

function errorHandler(error) {
  if (error.response.data) {
    console.log(error.response && error.response.data);
    throw error;
  }
  throw error;
}

export default {
  service,

  signup(userInfo) {
    return service
      .post("/api/auth/signup", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  signin(userInfo) {
    return service
      .post("/api/auth/signin", userInfo)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  isLoggedIn() {
    return service
      .get("/api/auth/isLoggedIn")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  logout() {
    return service
      .get("/api/auth/logout")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getItems() {
    return service
      .get("/api/items")
      .then((res) => res.data)
      .catch(errorHandler);
  },

  create(segment, formValues) {
    return service.post(segment, formValues).then((res) => res.data);
  },

  getOne(segment, id) {
    return service
      .get(`${segment}/${id}`)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  getAll(segment) {
    return service.get(segment).then((res) => res.data);
  },

  editOne(segment, formValues) {
    return service
      .patch(segment, formValues)
      .then((res) => res.data)
      .catch(errorHandler);
  },

  deleteItem(segment, id) {
    return service.delete(`${segment}/${id}`);
  },

  generatePdf(segment, id) {
    return service
      .get(`${segment}/${id}`)
      .then((res) => res )
      .catch(errorHandler);
  },

  getPdf(segment, id) {
    return service
      .get(`${segment}/${id}`)
      .then((res) => res )
      .catch(errorHandler);
  },
};
