import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

function PhoneList() { const [phones, setPhones] = useState([]);

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

export default PhoneList;
