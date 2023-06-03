// Home.jsx

import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import '../Home.css';

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3000/products');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  const handleDeleteProduct = async (productId) => {
    // Hiển thị cảnh báo xác nhận xóa
    const confirmDelete = window.confirm("Bạn có muốn xóa sản phẩm này?");
  
    if (confirmDelete) {
      try {
        await axios.delete(`http://localhost:3000/products/${productId}`);
  
        // Xóa sản phẩm khỏi danh sách
        const updatedProducts = products.filter((product) => product.id !== productId);
        setProducts(updatedProducts);
      } catch (error) {
        console.error('Error deleting product:', error);
      }
    }
  };

  return (
    <div>
      <div className="content-wrapper">
        <Link to="/add-product">Thêm Sản Phẩm</Link>
        <div className="table-responsive">
          <table className="table table-striped table-full-width">
            <thead>
              <tr>
                <th>STT</th>
                <th>Tên Sản Phẩm</th>
                <th>Loại Sản Phẩm</th>
                <th>Hình Ảnh</th>
                <th>Xuất Xứ</th>
                <th>Tình Trạng</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={product.id}>
                  <td>{index + 1}</td>
                  <td>{product.name}</td>
                  <td>{product.name_category}</td>
                  <td>
                    <img src={product.image} alt={product.productName} height="50" />
                  </td>
                  <td>{product.origin}</td>
                  <td>{product.tinhtranghang ? 'Còn hàng' : 'Hết hàng'}</td>
                  <td className="button-row">
                    <Link to={`edit-product/${product.id}`}>Sửa</Link>
                    <button className="btn btn-success">Xem</button>
                    <button className="btn btn-danger" onClick={() => handleDeleteProduct(product.id)}>
                      Xóa
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Home;
