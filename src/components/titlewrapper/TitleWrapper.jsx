import { StyledSubTitleText, StyledTitleWrapper, StylesTitleText } from "./StyledTitleWrapper";

const TitleWrapper = ({ title, subtitle, floatRight,left }) => {
    return (
        <StyledTitleWrapper right={floatRight}>
            <StyledSubTitleText left={left}>
                {subtitle}
            </StyledSubTitleText>
            <StylesTitleText>
                {title}
            </StylesTitleText>
        </StyledTitleWrapper>
    )
}
export default TitleWrapper;