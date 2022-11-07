import React, {Fragment} from "react";
import {
  Overlay,
  WrapperModal,
  HeaderModal,
  ContentModal,
  InputWrapper,
  InputModal,
  ButtonModal,
  CloseButton,
  LoginButton,
  Flex5Baseline,
} from "./ModalStyled";

const Modal = ({show, setShow, setLogged, loginForm, setLoginForm}) => {

  const [username, setUsername] = React.useState(()=>{
    if (localStorage.getItem('username') === null)
      return ''
    else
      return JSON.parse(localStorage.getItem('username'))
  });

  const [email, setEmail] = React.useState(()=>{
    if (localStorage.getItem('email') === null)
      return ''
    else
      return JSON.parse(localStorage.getItem('email'))
  });

  function onChange(event){
    const {name, value} = event.target
    if (name === 'email') {
      setUsername(value)
      localStorage.setItem(name, JSON.stringify(value))
    }
    if (name === 'username')  {
      setEmail(value)
      localStorage.setItem(name, JSON.stringify(value))
    }
  }

  function closeModal(){
    setShow(false)
  }

  function toogleLoginForm(){
    if (loginForm)
      setLoginForm(false)
    else
      setLoginForm(true)
  }

  function submit(){
    localStorage.setItem('logged', JSON.stringify(true))
    setLogged(true)
    closeModal()
  }

  return(
    <Fragment>
      {show &&
        <Overlay>
          <WrapperModal>
            <HeaderModal>
              <h2>{loginForm ? 'Enter your mail address' : 'Create your account'}</h2>
            </HeaderModal>
            <CloseButton onClick={()=>closeModal()}>
              X
            </CloseButton>
            <ContentModal>
              {!loginForm &&
                <InputWrapper>
                  <InputModal
                    id={'email'}
                    name={'email'}
                    onChange={onChange}
                    placeholder={'email'}
                    type='email'
                    value={email}
                  />
                </InputWrapper>
              }
              <InputWrapper>
                <InputModal
                  id={'username'}
                  name={'username'}
                  onChange={onChange}
                  placeholder={'username'}
                  type='text'
                  value={username}
                />
              </InputWrapper>
              {!loginForm &&
                <small>
                  By creating an account, you agree to our Terms of Use, and acknowledge that you have read our Privacy Policy, Cookies Policy and UK & EU Privacy Rights.
                </small>
              }
              <ButtonModal
                onClick={()=>submit()}
              >
                {loginForm? 'Login' : 'Create account'}
              </ButtonModal>
              <Flex5Baseline>
                <small>
                  {loginForm? 'Need an account?' : 'Already have an account?'}
                </small>
                <LoginButton onClick={()=>toogleLoginForm()}>
                  {loginForm? 'Sign Up' : 'Log In'}
                </LoginButton>
              </Flex5Baseline>
            </ContentModal>
          </WrapperModal>
        </Overlay>
      }
    </Fragment>
  )
};

export default Modal;
