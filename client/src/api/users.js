import api from "./axiosBase";

export const getUser = (id) => api.get(`/users/${id}`);
