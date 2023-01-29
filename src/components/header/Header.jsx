import { Cart, Menu } from "../../svg-component";
import { StyledCartSpan, StyledCartSubSpan, StyledHeader, StyledLogo, StyledParentDiv } from "./StylesHeader";
import logo from '../../assets/images/logo.png'
import { MainContainer } from "../../StyledApp";

const Header = ({ open, setOpen }) => {
    return (
        <StyledHeader>
            <MainContainer scroll={true}>
                <StyledParentDiv>
                    <Menu handleOpen={() => setOpen(true)} />
                    <StyledLogo src={logo} alt="logo" />
                    <StyledCartSpan>
                        <Cart />
                        <StyledCartSubSpan>
                            1
                        </StyledCartSubSpan>
                    </StyledCartSpan>
                </StyledParentDiv>
            </MainContainer>
        </StyledHeader>
    )
}
export default Header;