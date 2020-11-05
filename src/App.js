import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import Estates from './components/Estates/Estates';
import EstateInfo from './components/EstatesInfo/EstatesInfo';

import { AppWrapper } from './styled/AppSteles';
import { estatesSelector, fetchPosts } from './redux/estates';


const App = () => {
  const dispatch = useDispatch();
  const estates = useSelector(estatesSelector);

  useEffect(() => {
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
            component={Estates}
          />
          <Route
            path="/info/:id"
            exact
            component={EstateInfo}
          />
        </Switch>
      </Container>
    </AppWrapper>
  );
};

export default App;
