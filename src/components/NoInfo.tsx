import React from 'react';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { NoInfoContent } from '../styled/NoInfoStyles';

const NoInfo = () => (
        <Container className="d-flex align-items-center justify-content-center">
            <NoInfoContent>
                Sorry, don't have any information about this estate.
            </NoInfoContent>
        </Container>
);

export default NoInfo;