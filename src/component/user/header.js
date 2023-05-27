import React, { useState, useEffect } from 'react';
import axios from "axios";
import { Card, Button } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../../header.css'

function Home() {
  return (
    <div>
    <h2>Welcome to My Phone Store</h2>
    <p>
      My Phone Store offers a wide range of high-quality smartphones at competitive prices.
    </p>
    <p>
      We have the latest models from top brands and provide excellent customer service to ensure your satisfaction.
    </p>
    <p>
      Explore our products section to find the perfect smartphone for your needs, and feel free to contact us for any inquiries.
    </p>
  </div>
);
}


function PhoneList() {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    axios
      .get("https://64705ec63de51400f72423af.mockapi.io/phonelist")
      .then((response) => {
        setPhones(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="container">
      <h2>Phone List</h2>
      <br/>
      <br/>
      <div className="row">
        {phones.map((phone) => (
          <div className="col-md-4 mb-3" key={phone.id}>
            <Card>
              <Card.Img variant="top" src={phone.image} />
              <Card.Body>
                <Card.Title>{phone.name}</Card.Title>
                <Card.Text>
                  <div className="d-flex justify-content-between">
                    <div className="text-danger">${phone.oldprice}</div>
                    <div>${phone.newprice}</div>
                  </div>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      {[...Array(phone.rating)].map((_, i) => (
                        <i className="fa fa-star text-warning" key={i} />
                      ))}
                    </div>
                    {phone.discount && (
                      <div className="text-success">
                        <i className="fa fa-tag" /> {phone.discount}%
                      </div>
                    )}
                  </div>
                </Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

function Products() {
  return <PhoneList />;
}

function About() {
  return (
    <div>
      <h2>About Us</h2>
      <p>
        My Phone Store is a leading online store that specializes in selling high-quality smartphones at competitive prices. We are dedicated to providing our customers with the latest smartphone models from top brands.
      </p>
      <p>
        Our mission is to offer a seamless shopping experience, excellent customer service, and the best deals on the market. We take pride in our extensive selection of smartphones, catering to various budgets and preferences.
      </p>
      <p>
        At My Phone Store, we believe in the power of technology to enhance people's lives. We strive to bring the latest innovations in the smartphone industry to our customers, ensuring they stay connected and enjoy the benefits of cutting-edge technology.
      </p>
      <p>
        Whether you're looking for flagship devices, budget-friendly options, or anything in between, we have you covered. Our team of experts is always available to assist you in finding the perfect smartphone to meet your needs.
      </p>
      <p>
        Thank you for choosing My Phone Store. We value your trust and look forward to serving you with the best products and services.
      </p>
      <p>
        Contact us:
        <br />
        Phone: 123-456-7890
        <br />
        Email: info@myphonestore.com
        <br />
        Address: 123 Main Street, City, State, ZIP Code
      </p>
    </div>
  );

}

function Header() {
  return (
    <header>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">My Phone Store</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About Us</Link>
                </li>
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </header>
  );
}

export default Header;
