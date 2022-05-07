import styled from "styled-components";

export const StyledHeader = styled.header<{ transparent?: boolean }>`
  ${({ transparent }) => (transparent ? `` : `background-color: #fff;`)};
  margin: 0 auto;
  padding: 30px 20px;
`;

export const HeaderConteiner = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.figure<{ transparent?: boolean }>`
  ${({ transparent }) => (transparent ? `color: #fff;` : `color: #d15eff;`)};
  font-size: 32px;
  cursor: pointer;
`;

export const Burger = styled.figure<{ transparent?: boolean; open: boolean }>`
  position: relative;
  z-index: 3;
  margin-left: auto;
  width: 50px;
  aspect-ratio: 1;
  background-image: ${({ transparent }) =>
    transparent ? `url(/burger-light.svg)` : `url(/burger-dark.svg)`};
  transition: transform 0.5s ease-in-out;
  transform: ${({ open }) => (open ? "rotate(90deg)" : "rotate(0)")};

  @media (min-width: 500px) {
    display: none;
  }
`;

export const Shadow = styled.div<{ open: boolean }>`
  display: ${({ open }) => (open ? "block" : "none")};
  z-index: 1;
  position: absolute;
  inset: 0 0 auto auto;
  height: 100vh;
  width: 100vw;
  background-color: #4f4f4f2f;
`;

export const Nav = styled.nav<{ transparent?: boolean; open: boolean }>`
  position: absolute;
  inset: ${({ open }) => (open ? "0 0 auto auto" : "0 -100% auto auto")};
  background-color: ${({ transparent }) =>
    transparent ? "#522265ce" : "#fff"};
  height: 100vh;
  width: 320px;
  padding-top: 170px;
  z-index: 2;
  transition: all 0.5s ease-in-out;

  & li {
    ${({ transparent }) => (transparent ? `color: #fff;` : `color: #222;`)};
    cursor: pointer;
    font-size: 24px;
    font-weight: 400;

    &[data-disabled="true"] {
      padding: 0 0 3px 0;
      border-bottom: 3px solid #d15eff;
    }
  }

  & > ul {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    list-style: none;
  }

  @media (min-width: 500px) {
    margin-left: auto;
    position: static;
    background-color: transparent;
    height: auto;
    width: auto;
    transform: none;
    transition: none;
    padding: 0;

    & > ul {
      flex-direction: row;
    }
  }
`;
