import styled from 'styled-components';

export const EstateContainer = styled.div`
    box-sizing: border-box;
    padding: 15px;
`;
export const Img = styled.img.attrs(props => ({
    src: props.src
}))`
    display: block;
    width: 100%;
    height: ${props => props.id ? "400px" : "300px"};;
    object-fit: cover;
    margin-bottom: 10px;
`;
export const EstateDescription = styled.div`
    font-size: ${props => props.id ? "22px" : "16px"};
    margin-bottom: ${props => props.id ? "10px" : "5px"};
`;