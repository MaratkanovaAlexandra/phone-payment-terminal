import { useRouter } from "next/router";
import { FC, useState } from "react";
import Link from "next/link";
import Wrapper from "../Wrapper";

import {
  StyledHeader,
  HeaderConteiner,
  Shadow,
  Burger,
  Logo,
  Nav,
} from "./Header.styles";

type HeaderProps = {
  transparent?: boolean;
};

const Header: FC<HeaderProps> = (props) => {
  const { transparent } = props;
  const { route } = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <StyledHeader transparent={transparent}>
      <Shadow open={open} onClick={() => setOpen(false)} />
      <Wrapper>
        <HeaderConteiner>
          <Logo transparent={transparent}>
            <h1>PPT</h1>
          </Logo>
          <Burger
            transparent={transparent}
            open={open}
            onClick={() => setOpen(!open)}
          />
          <Nav transparent={transparent} open={open}>
            <ul>
              <li data-disabled={route === "/"}>
                <Link href="/">Welcome</Link>
              </li>
              <li data-disabled={route === "/providers"}>
                <Link href="/providers">Providers</Link>
              </li>
            </ul>
          </Nav>
        </HeaderConteiner>
      </Wrapper>
    </StyledHeader>
  );
};

Header.defaultProps = {
  transparent: false,
};

export default Header;
