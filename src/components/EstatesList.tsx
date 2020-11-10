import React from 'react';
import { useSelector } from 'react-redux';

import Estate from './Estate';

import { EstatesWrapper } from '../styled/estatesStyles';
import { estatesSelector } from '../redux/estates';

const EstatesLists = () => {
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

export default EstatesLists;
