import React from 'react';
import { Link } from 'react-router-dom';

import { EstateContainer, Img, EstateDescription } from '../../styled/estateStyles';

type Props = {
    estate: Estate;
};

const Estate: React.FC<Props> = ({ estate }) => {

    return (
        <EstateContainer
          as={Link}
          to={`/info/${estate.id}`}
        >
            <Img src={estate.preview_img} />
            <EstateDescription>
                {`Name: ${estate.title}`}
            </EstateDescription>
            <EstateDescription>
                {`Price: ${estate.price}$`}
            </EstateDescription>
            <EstateDescription>
                {`Address: ${estate.address.street}, ${estate.address.number}`}
            </EstateDescription>
        </EstateContainer>
    )
};

export default Estate;
