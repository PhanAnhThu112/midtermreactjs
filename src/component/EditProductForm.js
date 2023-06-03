import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import '../AddProduct.css';

const EditProductForm = () => {
  const  {id}  = useParams();
  const [product, setProduct] = useState({
    name: '',
    price: '',
    image: '',
    color: '',
    name_category: '',
    material: '',
    expiry_date: '',
    origin: '',
    description: '',
    tinhtranghang: false,
  });

  useEffect(() => {
    fetchProduct();
  }, []);
//Lấy dữ liệu từ URL mình cần chỉnh sửa
  const fetchProduct = async () => {
    try {
      const response = await axios.get(`http://localhost:3000/products/${id}`);
      
      setProduct(response.data);
      console.log(product);
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3000/products/${id}`, product);
      // Gửi lại yêu cầu để lấy thông tin sản phẩm đã cập nhật
      const response = await axios.get(`http://localhost:3000/products/${id}`);
      setProduct(response.data);
      // Hoặc bạn có thể gọi hàm fetchProduct để lấy thông tin sản phẩm
      // fetchProduct();
      window.location.href = '/';
    } catch (error) {
      console.error('Error updating product:', error);
    }
  };

  return (
    <div>
      <h2 style={{marginLeft:350}}>Chỉnh Sửa Sản Phẩm</h2>
      <form onSubmit={handleSubmit} style={{marginLeft:350}}>
        <div>
          <label htmlFor="name">Tên Sản Phẩm:</label>
          <input type="text" id="name" name="name" value={product.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="price">Giá Sản Phẩm:</label>
          <input type="number" id="price" name="price" value={product.price} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="image">Link Ảnh:</label>
          <input type="text" id="image" name="image" value={product.image} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="color">Màu Bánh:</label>
          <input type="text" id="color" name="color" value={product.color} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="category">Tên Loại Sản Phẩm:</label>
          <input type="text" id="category" name="name_category" value={product.name_category} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="material">Chất Liệu:</label>
          <input type="text" id="material" name="material" value={product.material} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="expirationDate">Hạn Sử Dụng:</label>
          <input type="text" id="expirationDate" name="expiry_date" value={product.expiry_date} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="origin">Xuất Xứ:</label>
          <input type="text" id="origin" name="origin" value={product.origin} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="description">Mô Tả:</label>
          <input type="text" id="description" name="description" value={product.description} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="status">Tình Trạng Hàng:</label>
          <input type="checkbox" id="status" name="tinhtranghang" checked={product.tinhtranghang} onChange={handleChange} />
        </div>
        <button type="submit">Cập Nhật</button>
      </form>
    </div>
  );
};

export default EditProductForm;
