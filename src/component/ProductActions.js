import axios from 'axios';

export const addProduct = async (product) => {
  try {
    // Send a POST request to the server to add the product
    const response = await axios.post('/api/products', product);
    return response.data;
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

export const editProduct = async (productId, updatedProduct) => {
  try {
    // Send a PUT request to the server to update the product
    const response = await axios.put(`/api/products/${productId}`, updatedProduct);
    return response.data;
  } catch (error) {
    console.error('Error editing product:', error);
    throw error;
  }
};

export const deleteProduct = async (productId) => {
  try {
    // Send a DELETE request to the server to delete the product
    await axios.delete(`/api/products/${productId}`);
  } catch (error) {
    console.error('Error deleting product:', error);
    throw error;
  }
};
