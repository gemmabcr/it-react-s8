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
import {useLoggedContext} from "../../application/PageLayout";

const Navbar = () => {
  const [logged, setLogged] = useLoggedContext ();
  const [loginModal, setLoginModal] = useState(false);
  const [loginForm, setLoginForm] = React.useState(true);

  function loginButton(){
    setLoginForm(true)
    setLoginModal(!loginModal)
  }

  function signupButton(){
    setLoginForm(false)
    setLoginModal(!loginModal)
  }

  function logoutButton(){
    localStorage.setItem('logged', JSON.stringify(false))
    setLogged(false)
  }

  return (
    <div>
      <Header>
        <LogoContainer>
          <Logo src={logo}/>
        </LogoContainer>
        {!logged &&
          <LoginContainer>
            <LoginButton onClick={()=> loginButton()}>
              Log in
            </LoginButton>
            <p>//</p>
            <LoginButton onClick={()=> signupButton()}>
              Sign up
            </LoginButton>
          </LoginContainer>
        }
        {logged &&
          <LoginContainer>
            <p>{JSON.parse(localStorage.getItem('username'))}</p>
            <LoginButton onClick={()=> logoutButton()}>
              Log Out
            </LoginButton>
          </LoginContainer>
        }
      </Header>
      <LinksMenu>
        <LinkMenu>
          <Link to={'/'}>Home</Link>
        </LinkMenu>
        <LinkMenu>
          {logged && <Link to={'/starships/'}>Starships</Link>}
          {!logged && <Link to={'/'}>Starships</Link>}
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