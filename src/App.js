import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { getEstates } from "./helpers/api";
import Estates from "./components/Estates/Estates"
import './App.css';

const App = () => {
  const [estates, setEstates] = useState([]);

  useEffect(() => {
    getEstates().then(resolve => setEstates(resolve));
  }, []);

  console.log(estates);
  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs="10">
          <div>
            hello
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
