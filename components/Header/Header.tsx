import { useRouter } from "next/router";
import { FC, useState, useEffect } from "react";
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

const Header: FC = () => {
  const router = useRouter();
  const transparent = router.route === "/";
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(true);

  useEffect(() => {
    (document.body.parentElement as HTMLElement).style.overflow = "visible";
  }, []);

  const openMenu = () => {
    setOpen(!open);
    setScroll(!scroll);
    if (scroll)
      (document.body.parentElement as HTMLElement).style.overflow = "hidden";
    else
      (document.body.parentElement as HTMLElement).style.overflow = "visible";
  };

  return (
    <StyledHeader transparent={transparent}>
      <Shadow open={open} onClick={openMenu} />
      <Wrapper>
        <HeaderConteiner>
          <Logo transparent={transparent} onClick={() => router.push("/")}>
            <h1>PPT</h1>
          </Logo>
          <Burger transparent={transparent} open={open} onClick={openMenu} />
          <Nav transparent={transparent} open={open}>
            <ul>
              <li data-disabled={router.route === "/"}>
                <Link href="/">Welcome</Link>
              </li>
              <li data-disabled={router.route === "/providers"}>
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
