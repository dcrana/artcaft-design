import styled from "styled-components"
export const StyledTitleWrapper = styled.div`
    @media only screen and (min-width: 768px) {
        float:${props=>props.right ? 'right' : 'unset'};
      }
`
export const StyledSubTitleText = styled.div`
    text-transform:uppercase;
    position:relative;
    width:100%;
    font-size:25px;
    font-weight:var(--font-semibold);
    color: #1c1b1c;
    top:15px;   
    left:20px;      
    @media only screen and (min-width: 768px) {
        font-size:76px;
        top:50px;
        left:${props=> props.left? props.left:"100px"} 
      }
`

export const StylesTitleText = styled.h1`
    text-transform:uppercase;
    width:100%;
    position:relative;
    font-size:28px;
    color: var(--black-1);
    letter-spacing:5px;
    font-weight:var(--font-bold);
    margin-left:10px;
    margin-bottom:30px;
      @media only screen and (min-width: 768px) {
        font-size:var(--font-verybigfontsize);
        letter-spacing:15px;
        color: var(--yellow-2);
        margin-right:15px;
        margin-bottom:50px;
      }
`