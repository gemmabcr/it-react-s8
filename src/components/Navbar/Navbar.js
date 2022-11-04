import React, {useState} from "react";
import {Link} from "react-router-dom";
import {
  Header,
  Logo,
  LoginContainer,
  LinksMenu,
  LinkMenu,
  LogoContainer,
  LoginButton,
} from "./NavbarStyled";
import Modal from "../Modal/Modal";
import logo from "../../assets/sw-logo.png";

const Navbar = () => {
  const [loginModal, setLoginModal] = useState(false);
  const [loginForm, setLoginForm] = React.useState(true);

  return (
    <div>
      <Header>
        <LogoContainer>
          <Logo src={logo}/>
        </LogoContainer>
        <LoginContainer>
          <LoginButton onClick={()=>setLoginModal(!loginModal)}>
            Log in
          </LoginButton>
          <p>//</p>
          <LoginButton onClick={()=> {
            setLoginForm(!loginForm)
            setLoginModal(!loginModal)
          }}>
            Sign up
          </LoginButton>
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
      <Modal
        show={loginModal}
        setShow={setLoginModal}
        form={loginForm}
      >
      </Modal>
    </div>
  )
}

export default Navbar;