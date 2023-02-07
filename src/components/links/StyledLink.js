import styled from "styled-components";

export const StyledLinkWrapper = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  left: 20px;
  top: 50%;
  z-index: 10;
`;

export const StyledLink = styled.a`
  height: 30px;
  border-left: ${(props) =>
    props?.isActive ? "5px solid #fff " : "1px solid #fff"};
  margin: 10px 0px 0px 0px;
  text-decoration: none;
  padding: 5px 0px 0px 10px;
  transition: border 0.3s ease;
  &:hover {
    border-left: solid 3px #fff;
    span {
      visibility: visible;
    }
  }
`;

export const StyledSpanLink = styled.span`
  visibility: hidden;
  color: var(--white-1);
`;
