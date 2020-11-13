import React from 'react';
import { Row, Col,
         Carousel, CarouselItem } from 'react-bootstrap';
import { Img } from '../styled/estateStyles';   

type Props = {
    photos: Array<string>;
};

const EstateInfoCarousel: React.FC<Props> = ({ photos }) => (
    <Row>
        <Col sm={{span: 6, offset: 3}}>
            <Carousel>
                {photos.map(photo => (
                    <CarouselItem
                        key={photo}
                    >
                        <Img src={photo} />
                    </CarouselItem>
                ))}
            </Carousel>
        </Col>
    </Row>
);

export default EstateInfoCarousel;
