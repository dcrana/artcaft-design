import { MainContainer } from "../../StyledApp";
import TitleWrapper from "../titlewrapper/TitleWrapper";
import { IntroductionParentDiv, IntroductionWrapper, StyledContent, StyledIntroParaOne, StyledIntroParaTwo, StyledTitleWrapper, StyledWelcomeText, StylesIntroHeading } from "./StyledIntroduction";

const Introduction = () => {
    return (
        <IntroductionWrapper id="introduction">
            <IntroductionParentDiv>
                <MainContainer>
                    {/* <StyledTitleWrapper>
                        <StyledWelcomeText>
                            Welcome
                        </StyledWelcomeText>
                        <StylesIntroHeading>
                            Introduction
                        </StylesIntroHeading>
                    </StyledTitleWrapper> */}
                    <TitleWrapper floatRight={true} title="Introduction" subtitle="Welcome" />
                    <StyledContent>
                        <StyledIntroParaOne>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </StyledIntroParaOne>
                        <StyledIntroParaTwo>
                            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </StyledIntroParaTwo>
                    </StyledContent>
                </MainContainer>
            </IntroductionParentDiv>

        </IntroductionWrapper>
    )
}
export default Introduction;