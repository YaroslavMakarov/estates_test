import styled from "styled-components";

export const EstateContainer = styled.div`
    box-sizing: border-box;
    padding: 15px;
`;
export const Img = styled.img.attrs(props => ({
    src: props.src
}))`
    display: block;
    width: 100%;
    height: 300px;
    object-fit: cover;
    margin-bottom: 10px;
`;
export const EstateDescription = styled.div`
    font-size: 16px;
    margin-bottom: 5px;
`;