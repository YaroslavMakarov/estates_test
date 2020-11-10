import React from 'react';
import { useParams } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';

import BackButton from '../components/BackButton';
import EstateInfoCarousel from '../components/EstateInfoCarousel';
import NoInfo from '../components/NoInfo';

import { Img, EstateDescription } from '../styled/estateStyles';
import { estatesSelector } from '../redux/estates';

type Params = {
    id: string;
};

const EstateInfo = () => {
const params: Params = useParams();
const estates = useSelector(estatesSelector);

const currentEstate = estates.filter(estate => estate.id === Number(params.id));

if (currentEstate.length === 0) {
    return (
        <NoInfo />
    );
}

    return (
        <>
            <BackButton />
            <Row>
                <Col sm={5}>
                    <Img 
                        src={currentEstate[0].preview_img}
                        id={params.id}
                    />
                </Col>
                <Col sm={{offset: 1, span: 5}}>
                    <EstateDescription id={params.id}>
                        {`Name: ${currentEstate[0].title}`}
                    </EstateDescription>
                    <EstateDescription id={params.id}>
                        {`Price: ${currentEstate[0].price}$`}
                    </EstateDescription>
                    <EstateDescription id={params.id}>
                        {`Address: ${currentEstate[0].address.street}, ${currentEstate[0].address.number}`}
                    </EstateDescription>
                    <EstateDescription id={params.id}>
                        {`Seller: ${currentEstate[0].seller}`}
                    </EstateDescription>
                    <EstateDescription id={params.id}>
                        {`Description: ${currentEstate[0].description}`}
                    </EstateDescription>
                </Col>
            </Row>
            <EstateInfoCarousel photos={currentEstate[0].detailed_photos} />
        </>
    )
};

export default EstateInfo;