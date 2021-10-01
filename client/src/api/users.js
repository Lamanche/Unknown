import api from "./axiosBase";

export const register = (data) => api.post("/users/register", data);

export const getUser = (id) => api.get(`/users/${id}`);
