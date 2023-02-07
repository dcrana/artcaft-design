import styled from "styled-components";
import customArtBG from "../../assets/images/customArtBG.png";

export const CustomArtWrapper = styled.section`
  width: 100%;
`;
export const CustomArtParentDiv = styled.div`
  background-image: url(${customArtBG});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
  height: auto;

  @media only screen and (min-width: 768px) {
    min-height: 1165px;
  }
`;

export const StyledCustomArtHeading = styled.h1`
    text-transform:uppercase;
    width:100%;
    color:#e8e3e8;
    font-size:28px;
    font-weight:var(--font-black);
    text-align:center;
    margin:80px 0px 0px 0px;

    @media only screen and (min-width: 768px) {
        font-size:48px;
        }
`;

export const StylesCustomArtFormTitle = styled.h3`
    text-transform:uppercase;
    width:100%;
    color:#a2a2a2;
    font-size:14px;
    font-weight:var(--font-light);
    text-align:center;
    margin:40px 0px 0px 0px;

    @media only screen and (min-width: 768px) {
        font-size:24px;
        }
`;

export const StyledFormParagraphDiv = styled.div`
  width: 100%;
  margin: 50px 0px 0px 0px;
  max-width: 1000px;
  margin: auto;
`;

export const StyledFormParagraph = styled.p`
  width: 95%;
  line-height: 40px;
  margin: auto;
  text-align: center;

  @media only screen and (min-width: 768px) {
    line-height: 90px;
    width: 100%;
  }
`;

export const StyledFormSpan = styled.span`
  width: 100%;
  color: #e8e3e8;
  font-size: 16px;
  font-weight: normal;

  @media only screen and (min-width: 768px) {
    font-size: 26px;
  }
`;

export const StyledNameInput = styled.input`
  width: 100%;
  max-width: ${(props) => (props.mobWidth ? props.mobWidth : "200px")};
  text-align: center;
  background-color: transparent;
  border: none;
  border-bottom: 1px solid #d8cf91;
  margin:0px 0px 0px 10px;
  outline: none;
  color: #e8e3e8;
  font-size: 16px;

  @media only screen and (min-width: 768px) {
    font-size: 26px;
    max-width: ${(props) => (props.width ? props.width : "500px")};
    width: 100%;
  }
`;

export const StyledCheckboxSubmitWrapper = styled.div`
  text-transform: uppercase;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px 0px 0px 0px;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    font-size: 20px;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledCheckBoxContainer = styled.div`
  text-transform: uppercase;
  display: flex;
  align-items: center;
  
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const StyledCheckbox = styled.input`
  height: 20px;
  width: 20px;
  background: transparent;
  accent-color: black;
`;

export const StyledPrivacyLabel = styled.label`
  color: #d5d5d5;
  font-size: 14px;
  margin:0px 0px 0px 15px;

  @media only screen and (min-width: 768px) {
    font-size: 20px;
  }
`;
export const StyleSendRequestButton = styled.button`
  text-transform: uppercase;
  border: 1px solid var(--white-1);
  border-radius: 25px;
  color: var(--white-1);
  font-weight: normal;
  width: 180px;
  height: 40px;
  text-align: center;
  background-color: transparent;
  cursor: pointer;
  margin: 30px 0px 0px 0px;

  @media only screen and (min-width: 768px) {
    margin: unset;
  }
`;

export const StyledSignatureDiv = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0px 0px 0px;
  align-items: center;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const StyledSignatureLeftPart = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledLogo = styled.img`
`;

export const StyledSignatureLinksWrapper = styled.div`
  margin-top: 20px;
`;

export const StyledSignatureLink = styled.span`
  margin:0px 25px 0px 0px;
  color: #d5d5d5;
  font-size: 16px;
  font-weight: var(--font-light);
  cursor: pointer;

  @media only screen and (min-width: 768px) {
    font-size: 18px;
  }
`;

export const StyledSignatureRightPart = styled.div`
  display: flex;
  flex-direction: column;
  line-height: 30px;
  margin: 50px 0px 0px 0px;

  @media only screen and (min-width: 768px) {
    margin: unset;
  }
`;

export const StyledSignatureName = styled.span`
  font-size: 16px;
  font-weight: var(--font-light);
  color: #d5d5d5;
`;

export const StyledSubScribeLetterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 100px 0px 0px 0px;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StyledSubScribeLetterLeft = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  svg {
    position: absolute;
    right: 0px;
    bottom: 12px;
  }
`;

export const StyledSubScribeMailText = styled.span`
  font-size: 23px;
  font-weight: var(--font-medium);
  color: #fff;

  @media only screen and (min-width: 768px) {
    font-size: 29px;
  }
`;

export const StyledSubScribeMailField = styled.input`
  outline: none;
  border: none;
  background-color: transparent;
  width: 100%;
  margin: 30px 0px 0px 0px;
  margin: auto;
  height: 40px;
  border-bottom: 1px solid var(--white-1);

  @media only screen and (min-width: 768px) {
    max-width: 500px;
  }
`;

export const StyledSubScribeLetterRight = styled.div`
  margin: 50px 0px 0px 0px;
  svg {
    margin: 0px 10px 0px 10px;
    cursor: pointer;
  }

  @media only screen and (min-width: 768px) {
    margin: unset;
  }
`;

export const StylesHr = styled.hr`
  border: solid 1px #272727;
  margin: 60px 0px 0px 0px;
`;

export const StyledCopyRightWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 60px 0px 60px 0px;

  @media only screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const StyledCopyRight = styled.div`
  color: #d5d5d5;
  font-size: 16px;
  font-weight: normal;
`;

export const StyledDesigner = styled.div`
  color: #d5d5d5;
  font-size: 16px;
  font-weight: normal;
  margin: 15px 0px 0px 0px;

  @media only screen and (min-width: 768px) {
    margin: unset;
  }
`;
