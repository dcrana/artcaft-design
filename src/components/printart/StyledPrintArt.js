import styled from "styled-components";
import printArtBG from "../../assets/images/printArtBG.png";

export const PrintArtWrapper = styled.section`
  width: 100%;
`;

export const PrintArtParentDiv = styled.div`
  background-image: url(${printArtBG});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  height: auto;

  @media only screen and (min-width: 768px) {
    min-height: 682px;
  }
`;

export const StyledPaintArtWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
`;

export const StyledPrintartCard = styled.div`
  width: 250px;
  height: 370px;
  border: 2px solid #ffffff;
  margin: 50px 0px 50px 0px;
  transition: all 0.3s linear;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  flex-direction: column;
  text-transform: uppercase;
  padding: 0px 0px 30px 30px;

  &:hover {
    transform: translateY(-30px);
    border: 2px solid #d8cf91;
  }

  @media only screen and (min-width: 768px) {
    margin: 50px 40px 50px 0px;
    &:last-of-type {
      margin: 50px 0px 50px 0px;
    }
  }
`;

export const StyledPrintArtImage = styled.img`
  position: absolute;
  top: -50px;
  left: -25px;
`;

export const StyledPrintArtCardTitle = styled.span`
  color: var(--white-1);
  font-size: 14px;
  font-weight: normal;
  margin: 10px 0px 0px 0px;
`;

export const StyledPrintArtCardPrice = styled.span`
  color: var(--white-1);
  font-size: 16px;
  font-weight: var(--font-bold);
  margin: 10px 0px 0px 0px;
`;

export const StyledPrintArtCardMaterial = styled.span`
  color: #919191;
  font-size: 13px;
  font-weight: normal;
  margin: 10px 0px 0px 0px;
`;

export const StyledAddToCart = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 40px;
  border: solid 1px #d8cf91;
  position: absolute;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  &:hover {
    background-color: var(--white-1);
    border: none;
  }
`;
