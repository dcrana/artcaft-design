import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 150px;
  margin: auto;
  position: absolute;
  top: 35px;
  z-index: 11;
  background: transparent;
`;
export const StyledParentDiv = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  
  @media only screen and (min-width: 768px) {
    width: 100%;
  }
`;

export const StyledLogo = styled.img``;

export const StyledCartSpan = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--black-2);
  height: 50px;
  width: 50px;
  border-radius: 50%;
  position: relative;
`;

export const StyledCartSubSpan = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 24px;
  height: 24px;
  font-size: var(--twelve);
  font-weight: var(--font-bold);
  color: var(--white-1);
  background-color: var(--orange-1);
  border-radius: 50%;
  position: absolute;
  left: 30px;
  bottom: -10px;
`;
