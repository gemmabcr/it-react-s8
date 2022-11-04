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
  const [logged, setLogged] = React.useState(()=>{
    return localStorage.getItem('logged')
  });

  return (
    <div>
      <Header>
        <LogoContainer>
          <Logo src={logo}/>
        </LogoContainer>
        {!logged &&
          <LoginContainer>
            <LoginButton onClick={()=> {
              setLoginForm(true)
              setLoginModal(!loginModal)
            }}>
              Log in
            </LoginButton>
            <p>//</p>
            <LoginButton onClick={()=> {
              setLoginForm(false)
              setLoginModal(!loginModal)
            }}>
              Sign up
            </LoginButton>
          </LoginContainer>
        }
        {logged &&
          <LoginContainer>
            <p>{JSON.parse(localStorage.getItem('username'))}</p>
          </LoginContainer>
        }
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
        setLogged={setLogged}
        loginForm={loginForm}
        setLoginForm={setLoginForm}
      />
    </div>
  )
}

export default Navbar;