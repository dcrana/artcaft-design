import { Facebook, Instagram } from "../../svg-component";
import ScrollBottom from "../scrollbottom/ScrollBottom";
import {
    AboutMeButton,
    BannerSectionWrapper,
    StlyesFBLink,
    StlyesInstaLink,
    StyledBannerHeading,
    StyledBannerSubHeading,
    StyledFBInstaIconsWrapper,
    StylesBannerWrapper,
} from "./StylesBanner";

const Banner = () => {
    return (
        <BannerSectionWrapper id="banner">
            <StylesBannerWrapper>
                <StyledBannerSubHeading>
                    Technique in which pigments are mixed with hot
                </StyledBannerSubHeading>
                <StyledBannerHeading>Acrylic painting</StyledBannerHeading>
                <AboutMeButton>About Me</AboutMeButton>
                <StyledFBInstaIconsWrapper>
                    <StlyesFBLink href="https://www.facebook.com" target="_blank">
                        <Facebook />
                    </StlyesFBLink>
                    <StlyesInstaLink href="https://www.instagra.com" target="_blank">
                        <Instagram />
                    </StlyesInstaLink>
                </StyledFBInstaIconsWrapper>
                <ScrollBottom />
            </StylesBannerWrapper>
        </BannerSectionWrapper>
    );
};
export default Banner;
