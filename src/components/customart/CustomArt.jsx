import { MainContainer } from "../../StyledApp";
import { CustomArtParentDiv, CustomArtWrapper, StyledCheckbox, StyledCheckBoxContainer, StyledCheckboxSubmitWrapper, StyledCopyRight, StyledCopyRightWrapper, StyledCustomArtHeading, StyledDesigner, StyledFormParagraph, StyledFormParagraphDiv, StyledFormSpan, StyledLogo, StyledNameInput, StyledPrivacyLabel, StyledSignatureDiv, StyledSignatureLeftPart, StyledSignatureLink, StyledSignatureLinksWrapper, StyledSignatureName, StyledSignatureRightPart, StyledSubScribeLetterLeft, StyledSubScribeLetterRight, StyledSubScribeLetterWrapper, StyledSubScribeMailField, StyledSubScribeMailText, StylesCustomArtFormTitle, StyleSendRequestButton, StylesHr } from "./StyledCustomArt";
import logo from '../../assets/images/logo.png'
import { Facebook, Forward, Instagram } from "../../svg-component";
import { StlyesFBLink, StlyesInstaLink } from "../banner/StylesBanner";

const CustomArt = () => {
    return (
        <CustomArtWrapper id="customart">
            <CustomArtParentDiv>
                <MainContainer>
                    <StyledCustomArtHeading>
                        Are you interested for a custom art?
                    </StyledCustomArtHeading>
                    <StylesCustomArtFormTitle>
                        Enter you contact details i will get back to you
                    </StylesCustomArtFormTitle>
                    <StyledFormParagraphDiv>
                        <StyledFormParagraph>
                            <StyledFormSpan>
                                What is your
                            </StyledFormSpan>
                            <StyledNameInput type='text' placeholder="NAME" />
                            <StyledFormSpan>
                                ? What is your
                            </StyledFormSpan>
                            <StyledNameInput type='text' placeholder="TELEPHONE NUMBER" width="360px" />
                            <StyledFormSpan>
                                ? What is your
                            </StyledFormSpan>
                            <StyledNameInput type='text' placeholder="EMAIL ADDRESS " width="360px" />
                            <StyledFormSpan>
                                ?
                            </StyledFormSpan>
                            <StyledNameInput type='text' placeholder="Is there anything else what you want to say?" width="900px" mobWidth="95%" />
                        </StyledFormParagraph>
                        <StyledCheckboxSubmitWrapper>
                            <StyledCheckBoxContainer>
                                <StyledCheckbox type="checkbox" id="terms" />
                                <StyledPrivacyLabel htmlFor="terms">
                                    Accept privacy policy
                                </StyledPrivacyLabel>
                            </StyledCheckBoxContainer>
                            <StyleSendRequestButton>
                                SEND REQUEST
                            </StyleSendRequestButton>
                        </StyledCheckboxSubmitWrapper>
                    </StyledFormParagraphDiv>
                    <StyledSignatureDiv>
                        <StyledSignatureLeftPart>
                            <StyledLogo src={logo}>
                            </StyledLogo>
                            <StyledSignatureLinksWrapper>
                                <StyledSignatureLink>About Me</StyledSignatureLink>
                                <StyledSignatureLink>Privacy Policy</StyledSignatureLink>
                                <StyledSignatureLink>Imprint</StyledSignatureLink>
                            </StyledSignatureLinksWrapper>
                        </StyledSignatureLeftPart>
                        <StyledSignatureRightPart>
                            <StyledSignatureName>Raffaello Djordjevic</StyledSignatureName>
                            <StyledSignatureName>E-Mail: raffaello@artbyraff.com</StyledSignatureName>
                        </StyledSignatureRightPart>
                    </StyledSignatureDiv>
                    <StyledSubScribeLetterWrapper>
                        <StyledSubScribeLetterLeft>
                            <StyledSubScribeMailText>
                                Subscribe Newsletter
                            </StyledSubScribeMailText>
                            <StyledSubScribeMailField type='text' placeholder="Yout email" />
                            <Forward />
                        </StyledSubScribeLetterLeft>
                        <StyledSubScribeLetterRight>
                            <StlyesFBLink href="https://www.facebook.com" target="_blank"><Facebook /></StlyesFBLink>
                            <StlyesInstaLink href="https://www.instagra.com" target="_blank" ><Instagram /></StlyesInstaLink>
                        </StyledSubScribeLetterRight>
                    </StyledSubScribeLetterWrapper>
                    <StylesHr />
                    <StyledCopyRightWrapper>
                        <StyledCopyRight>
                            @2020 ArtbyRaff
                        </StyledCopyRight>
                        <StyledDesigner>
                            ❤️ Designed and developed by Appsandmore24
                        </StyledDesigner>
                    </StyledCopyRightWrapper>
                </MainContainer>
            </CustomArtParentDiv>
        </CustomArtWrapper>
    )
}
export default CustomArt;