import styled from "styled-components";

export const MainContainer = styled.div`
    width:95%;
    max-width:1200px;
    height:100%;
    margin:auto;
    overflow-x:${props => props.scroll ? "unset": "hidden"};
`   