import React from 'react';
import { Row, Col,
         Carousel, CarouselItem } from 'react-bootstrap';
import { Img } from '../../styled/estateStyles';         

const EstateInfoCarousel = ({ photos }) => {
    return (
        <Row>
            <Col sm={{span: 6, offset: 3}}>
                <Carousel>
                    {photos.map(photo => (
                    <CarouselItem>
                        <Img src={photo} />
                    </CarouselItem>
                    ))}
                </Carousel>
            </Col>
        </Row>
    );
};

export default EstateInfoCarousel;
