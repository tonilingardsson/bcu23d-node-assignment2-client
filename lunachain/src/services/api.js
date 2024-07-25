import axios from 'axios';

const API_URL = 'http://localhost:5001/api/v1';

export const fetchBlockchain = async () => {
  const response = await axios.get(`${API_URL}/blockchain`);
  return response.data;
};

export const addBlock = async (data) => {
  const response = await axios.post(`${API_URL}/blocks`, { data });
  return response.data;
};
