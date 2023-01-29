import styled from "styled-components";
import menuBG from '../../assets/images/menuBG.png'

export const StyledMenuWrapper = styled.div`
    background-color:var(--black-1);
    background-image:url(${menuBG});
    background-repeat:no-repeat;
    background-size:cover;
    visibility: ${props => props.open ? "visible": "hidden"};
    transiton:visibility 4s linear;
    width:100%;
    height:100%;
    position:fixed;
    top:0px;
    left:0px;
    z-index:1;
    @media only screen and (min-width: 768px) {
    }
` 


export const StyledMenuInnerWrapper = styled.div`
    position:relative;
    height:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-between;
    align-items:center;
    padding:30px 0px;
    @media only screen and (min-width: 768px) {
    }
` 

export const StyledCloseWrapper = styled.div`
    position:absolute;
    color:var(--white-2);
    font-size:var(--eighteen);
    font-weight:normal;
    display:flex;
    align-items:center;
    top:5%;
    left:3%;
    cursor:pointer;
    @media only screen and (min-width: 768px) {
      top:10%;
      left:10%;
    }
`

export const StyledMenulist = styled.div`
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    width:100%;
    flex-wrap:wrap; 
    @media only screen and (min-width: 768px) {
      flex-direction:row;
    }
` 
export const StyledLink = styled.a`
  text-decoration:none;
  font-size:52px;
  color:transparent;
  -webkit-text-stroke: 1px var(--white-1);
  font-weight:var(--font-bold);
  &:hover{
    color:var(--white-2);
  }
  &:hover::before{
    content: "";
    height:7px;
    width:50px;
    display:inline-block;
    background-color:#d8cf91;
    margin:0px 5px 12.5px 0px;
  }
  @media only screen and (min-width: 768px) {
    margin-right:50px;
  }
`

export const StyledFBInstaIconsWrapper = styled.div`
  display:flex;
  align-items:center;
  width:75px;
  justify-content:space-between;

`
export const StlyesFBLink = styled.a`
  text-decoration:none;
  cursor:pointer
`
export const StlyesInstaLink = styled.a`
  text-decoration:none;
  cursor:pointer;
`

