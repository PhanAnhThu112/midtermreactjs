import React, { useState } from 'react';
import axios from 'axios';
import '../AddProduct.css';

const AddProductForm = () => { 
//Các biến trạng thái để lưu trữ các đầu vào của biểu mẫu
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

    //Tạo một đối tượng sản phẩm mới với dữ liệu biểu mẫu
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
      // Gửi dữ liệu sản phẩm mới đến máy chủ 
      const response = await axios.post('http://localhost:3000/products', newProduct);

      //Kiểm tra xem yêu cầu có thành công không
      if (response.status === 201) {
        console.log('Product added successfully!');
        // Đặt lại đầu vào biểu mẫu thành rỗng
        setProductName('');
        setProductPrice('');
        setImage('');
        setProductCategory('');
        setCakeColor('');
        setIngredient('');
        setExpiryDate('');

        //Chuyển hướng đến trang chủ
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
