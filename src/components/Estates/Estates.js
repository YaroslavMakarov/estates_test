import React from "react";

import Estate from "../Estate/Estate";

import { EstatesWrapper } from "../../styled/estatesStyles";

const Estates = ({ estates }) => {
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
