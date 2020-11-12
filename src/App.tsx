import React, { useEffect, Dispatch } from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import EstatesList from './components/EstatesList';
import EstateInfo from './components/EstatesInfo';

import { AppWrapper } from './styled/AppSteles';
import { AllEstatesAction, fetchPosts } from './redux/estates';


const App = () => {
  const estatesDispatch = useDispatch<Dispatch<AllEstatesAction>>();

  useEffect(() => {
    estatesDispatch(fetchPosts());
  }, []);

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
            component={EstatesList}
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
