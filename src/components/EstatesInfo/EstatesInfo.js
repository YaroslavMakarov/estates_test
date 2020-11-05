import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

import EstateInfoCarousel from '../EstateInfoCarousel/EstateInfoCarousel';

import { Img, EstateDescription } from '../../styled/estateStyles';
import { estatesSelector } from '../../redux/estates';

const EstateInfo = () => {
const params = useParams();
const history = useHistory();
const estates = useSelector(estatesSelector);

const currentEstate = estates.find(estate => {
    if (estate.id === Number(params.id)) {
        return estate;
    }
})

    return (
        <>
            <Container
              fluide
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
            <Row>
                <Col sm={5}>
                    <Img 
                        src={currentEstate.preview_img}
                        id={params.id}
                    />
                </Col>
                <Col sm={{offset: 1, span: 5}}>
                    <EstateDescription id={params.id}>
                        {`Name: ${currentEstate.title}`}
                    </EstateDescription>
                    <EstateDescription id={params.id}>
                        {`Price: ${currentEstate.price}$`}
                    </EstateDescription>
                    <EstateDescription id={params.id}>
                        {`Address: ${currentEstate.address.street}, ${currentEstate.address.number}`}
                    </EstateDescription>
                    <EstateDescription id={params.id}>
                        {`Seller: ${currentEstate.seller}`}
                    </EstateDescription>
                    <EstateDescription id={params.id}>
                        {`Description: ${currentEstate.description}`}
                    </EstateDescription>
                </Col>
            </Row>
            <EstateInfoCarousel photos={currentEstate.detailed_photos} />
        </>
    )
};

export default EstateInfo;