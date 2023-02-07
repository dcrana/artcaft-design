import { Cross, Facebook, Instagram } from "../../svg-component";
import { StyledLogo } from "../header/StylesHeader";
import { StlyesFBLink, StlyesInstaLink, StyledCloseWrapper, StyledFBInstaIconsWrapper, StyledLink, StyledMenuInnerWrapper, StyledMenulist, StyledMenuWrapper } from "./StylesmenuOpen";
import logo from '../../assets/images/logo.png'


const Menuopen = ({ open, setOpen }) => {
    return (
        <StyledMenuWrapper open={open}>
            <StyledMenuInnerWrapper>
                <StyledCloseWrapper onClick={() => { setOpen(false) }}>
                    <Cross />
                    Close
                </StyledCloseWrapper>
                <StyledLogo src={logo} />
                <StyledMenulist>
                    <StyledLink href="#">About Me</StyledLink>
                    <StyledLink href="#">Handmade</StyledLink>
                    <StyledLink href="#">Print</StyledLink>
                    <StyledLink href="#">Contact</StyledLink>
                </StyledMenulist>
                <StyledFBInstaIconsWrapper>
                    <StlyesFBLink href="https://www.facebook.com" target="_blank"><Facebook /></StlyesFBLink>
                    <StlyesInstaLink href="https://www.instagra.com" target="_blank" ><Instagram /></StlyesInstaLink>
                </StyledFBInstaIconsWrapper>
            </StyledMenuInnerWrapper>
        </StyledMenuWrapper>
    )
}
export default Menuopen;