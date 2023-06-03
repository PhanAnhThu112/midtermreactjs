import React, { useState } from 'react';
import axios from 'axios';
import '../AddProduct.css';

const AddProductForm = () => {
  // State variables to store the form inputs
  const [name, setProductName] = useState('');
  const [price, setProductPrice] = useState('');
  const [image, setImage] = useState('');
  const [name_category, setProductCategory] = useState('');
  const [color, setCakeColor] = useState('');
  const [origin, setIngredient] = useState('');
  const [expiry_date, setExpiryDate] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a new product object with the form data
    const newProduct = {
      name,
      price,
      image,
      name_category,
      color,
      origin,
      expiry_date
    };

    try {
      // Send the new product data to the server or API
      const response = await axios.post('http://localhost:3000/products', newProduct);

      // Check if the request was successful
      if (response.status === 201) {
        console.log('Product added successfully!');
        // Reset form inputs
        setProductName('');
        setProductPrice('');
        setImage('');
        setProductCategory('');
        setCakeColor('');
        setIngredient('');
        setExpiryDate('');

        // Redirect to the home page
        window.location.href = '/';
      } else {
        console.error('Failed to add product.');
      }
    } catch (error) {
      console.error('Error occurred while adding product:', error);
    }
  };

  return (
    <div className="form-container">
    <form onSubmit={handleSubmit}>
      <div >
        <label htmlFor="productName">Tên Sản Phẩm</label>
        <input
          type="text"
          id="productName"
          value={name}
          onChange={(e) => setProductName(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="productPrice">Giá Sản Phẩm</label>
        <input
          type="number"
          id="productPrice"
          value={price}
          onChange={(e) => setProductPrice(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="image">Link Ảnh</label>
        <input
          type="text"
          id="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="productCategory">Loại Sản Phẩm</label>
        <input
          type="text"
          id="productCategory"
          value={name_category}
          onChange={(e) => setProductCategory(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cakeColor">Màu Bánh</label>
        <input
          type="text"
          id="cakeColor"
          value={color}
          onChange={(e) => setCakeColor(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="ingredient">Xuất Xứ</label>
        <input
          type="text"
          id="ingredient"
          value={origin}
          onChange={(e) => setIngredient(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="expiryDate">Hạn Sử Dụng</label>
        <input
          type="text"
          id="expiryDate"
          value={expiry_date}
          onChange={(e) => setExpiryDate(e.target.value)}
        />
      </div>
      <button type="submit">Thêm</button>
    </form>
    </div>
  );
};

export default AddProductForm;
