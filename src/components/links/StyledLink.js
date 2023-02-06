import styled from "styled-components";

export const StyledLinkWrapper = styled.div`
    position:fixed;
    display:flex;
    flex-direction:column;
    left:20px;
    top:50%;
    z-index: 10;
`

export const StyledLink = styled.a`
/* width:0px; */
height:30px;
border-left: ${(props) => props?.isActive ?"3px solid #fff ": "1px solid #fff" }  ;
margin-top:10px;
text-decoration: none;
padding: 5px 0px 0px 10px;
transition: border 1s ease;
&:hover{
    border-left:solid 3px #fff;
    span{
        visibility: visible;
    }
}
/* &:active{
    border-left:solid 3px #f00;
} */
`

export const StyledSpanLink = styled.span`
visibility: hidden;
color: var(--white-1);
`