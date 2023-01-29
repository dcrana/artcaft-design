import styled from "styled-components";
import introBG from '../../assets/images/introBG.png'

export const IntroductionWrapper = styled.section`
`
export const IntroductionParentDiv = styled.div`
    background-image:url(${introBG});
    background-repeat:no-repeat;
    background-position:center;
    background-size:100% 100%;
    height:auto;
    @media only screen and (min-width: 768px) {
        height:650px
      }
`
export const IntroductionInnerDiv = styled.div`
    width:100%;
    max-width:1200px;
    margin:auto
`
export const StyledContent = styled.div`
    width:80%;
    clear:both;
    margin:50px auto;
    border-left: 4px solid #d8cf91;
    // height:100%;

`
export const StyledIntroParaOne = styled.p`
margin-left:30px;
color: #d8d8d8;
font-size:var(--twentytwo);
font-weight:var(--font-light)
`

export const StyledIntroParaTwo= styled.p`
margin-top:40px;
margin-left:30px;
color: #d8d8d8;
font-size:var(--twentytwo);
font-weight:var(--font-light);
`