import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import EstateInfoCarousel from '../EstateInfoCarousel/EstateInfoCarousel';

import { Img, EstateDescription } from '../../styled/estateStyles';

const EstateInfo = ({ estates }) => {
const params = useParams();

const currentEstate = estates.find(estate => {
    if (estate.id === Number(params.id)) {
        return estate;
    }
})

    return (
        <>
            <Row>
                <Col sm={5}>
                    <Img 
                        src={currentEstate.preview_img}
                        id={params.id}
                    />
                </Col>
                <Col sm={{offset: 1, span: 4}}>
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
 {/* {currentEstate.id} */}