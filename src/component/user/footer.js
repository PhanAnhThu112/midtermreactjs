import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '../../footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>Thông tin liên hệ</h4>
            <ul className="contact-info">
              <li><FontAwesomeIcon icon="map-marker-alt" /> Địa chỉ: 123 đường ABC, quận XYZ, TP. HCM</li>
              <li><FontAwesomeIcon icon="phone" /> Điện thoại: (012) 345-6789</li>
              <li><FontAwesomeIcon icon="envelope" /> Email: info@example.com</li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Liên kết hữu ích</h4>
            <ul className="useful-links">
              <li><a href="#">Điều khoản sử dụng</a></li>
              <li><a href="#">Chính sách bảo mật</a></li>
              <li><a href="#">Giới thiệu về chúng tôi</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Theo dõi chúng tôi</h4>
            <ul className="social-media">
              <li><a href="#"><FontAwesomeIcon icon={faFacebookF} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faTwitter} /></a></li>
              <li><a href="#"><FontAwesomeIcon icon={faInstagram} /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
