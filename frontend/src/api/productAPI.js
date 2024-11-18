import axios from 'axios';


const API_URL = 'http://localhost:5000'; 

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}/api/products`); 
    return response.data;
  } catch (error) {
    console.error('Error fetching products:', error);
    return []; 
  }
};

export const getProductById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/api/products/${id}`); // Add base URL
    return response.data;
  } catch (error) {
    console.error('Error fetching product by ID:', error);
    throw error;
  }
};
