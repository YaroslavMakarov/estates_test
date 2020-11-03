import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
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
    <Container className="d-flex justify-content-center">
      <Estates estates={estates} />
    </Container>
  );
}

export default App;
