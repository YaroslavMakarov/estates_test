import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Estates from './components/Estates/Estates';
import EstateInfo from './components/EstatesInfo/EstatesInfo';

// import { getEstates } from './helpers/api';
import { AppWrapper } from './styled/AppSteles';
import { estatesSelector, fetchPosts } from './redux/estates';


const App = () => {
  // const [estates, setEstates] = useState([]);
  const dispatch = useDispatch();
  const estates = useSelector(estatesSelector);

  // useEffect(() => {
  //   getEstates().then(resolve => setEstates(resolve));
  // }, []);

  useEffect(() => {
    console.log("dispatch");
    dispatch(fetchPosts());
  }, []);
  console.log(estates);

  return (
    <AppWrapper>
      <Container className="
          d-flex
          align-items-center
          flex-column
        "
      >
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Estates estates={estates} />}
          />
          <Route
            path="/info/:id"
            exact
            render={() => <EstateInfo estates={estates} />}
          />
        </Switch>
      </Container>
    </AppWrapper>
  );
};

export default App;
