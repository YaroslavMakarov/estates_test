import React from 'react';
import { Link, useParams} from 'react-router-dom';

import { EstateContainer, Img, EstateDescription } from '../../styled/estateStyles';

const Estate = ({ estate }) => {
    const params = useParams();

    console.log(params);
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
