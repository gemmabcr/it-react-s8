import React from "react";
import {Link} from "react-router-dom";
import {Header, Logo, LoginContainer, LinksMenu, LinkMenu, LogoContainer} from "./NavbarStyled";
import logo from "../../assets/sw-logo.png";

const Navbar = () => {
  return (
    <div>
      <Header>
        <LogoContainer>
          <Logo src={logo}/>
        </LogoContainer>
        <LoginContainer>
          <Link to={'/login'}>Log in</Link>
          <p>//</p>
          <Link to={'/signup'}>Sign up</Link>
        </LoginContainer>
      </Header>
      <LinksMenu>
        <LinkMenu>
          <Link to={'/'}>Home</Link>
        </LinkMenu>
        <LinkMenu>
          <Link to={'/starships/'}>Starships</Link>
        </LinkMenu>
      </LinksMenu>
    </div>
  )
}

export default Navbar;