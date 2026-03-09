import axios from "axios";

const API = "http://localhost:5000/api/auth";

export const login = (data) => {
  return axios.post(`${API}/login`, data);
};

export const sendResetPin = (data) => {
  return axios.post(`${API}/forgot-password`, data);
};

export const resetPassword = (data) => {
  return axios.post(`${API}/reset-password`, data);
};