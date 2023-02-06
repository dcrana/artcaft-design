import styled from "styled-components";
import bannerBG from '../../assets/images/bannerBG.png'



export const BannerSectionWrapper = styled.section`
   /* position:relative; */
`;

export const StylesBannerWrapper = styled.div`
  background-image:url(${bannerBG});
  background-repeat:no-repeat;
  background-position:center;
  background-size:100% 100%;
  display:flex;
  align-items:center;
  justify-content:center;
  flex-direction:column;
  height:771px;
  width:100%;
 position:relative;
`;


export const StyledBannerSubHeading = styled.h2`
  text-transform:uppercase;
  color:var(--white-1);
  font-size:var(--sixteen);
  font-weight:normal;
  text-align:center;
  @media only screen and (min-width: 768px) {
    font-size:var(--twentytwo);
  }
`;


export const StyledBannerHeading = styled.h1`
  text-transform:uppercase;
  color:var(--yellow-1);
  font-size:52px;
  font-weight:normal;
  margin-top:26px;
  text-align:center;
  @media only screen and (min-width: 768px) {
    font-size:var(--font-bigfontsize);
  }
`;


export const AboutMeButton = styled.button`
  text-transform:uppercase;
  border:1px solid var(--white-1);
  border-radius:25px;
  color:var(--white-1);
  font-weight:normal;
  width:280px;
  height:60px;  
  text-align:center;  
  margin-top:42px;
  background-color:transparent;
  cursor:pointer
`;

export const StyledFBInstaIconsWrapper = styled.div`
  position:absolute;
  display:flex;
  flex-direction:column;
  align-items:center;
  right:20px;
  top:100%;
  @media only screen and (min-width: 768px) {
    top:50%;
  }
`
export const StlyesFBLink = styled.a`
  text-decoration:none;
  cursor:pointer
`
export const StlyesInstaLink = styled.a`
  text-decoration:none;
  cursor:pointer;
  margin-top:10px;
`


