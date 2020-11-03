import React from "react";
import { EstateContainer, Img, EstateDescription } from "./estateStyles"

const Estate = ({ estate }) => {
    return (
        <EstateContainer>
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
