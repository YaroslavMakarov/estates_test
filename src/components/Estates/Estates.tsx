import React from "react";
import { useSelector } from 'react-redux';

import Estate from "../Estate/Estate";

import { EstatesWrapper } from "../../styled/estatesStyles";
import { estatesSelector } from '../../redux/estates';

const Estates = () => {
    const estates = useSelector(estatesSelector);

    return (
        <EstatesWrapper>
            {estates.map(estate => (
                <Estate
                  key={estate.id}
                  estate={estate}
                />
            ))}
        </EstatesWrapper>
    );
};

export default Estates;
