import React from 'react';
import { Container, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory } from 'react-router-dom';

const BackButton = () => {
    const history = useHistory();

    return (
        <Container
            fluid
            className="p-0"
        >
            <Button
                variant="dark"
                className="mb-3"
                onClick={() => history.goBack()}
            >
                Back
            </Button>
        </Container>
    );
};

export default BackButton;