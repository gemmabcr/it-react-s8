import React, {Fragment} from "react";
import {Overlay, WrapperModal, HeaderModal, ContentModal, InputWrapper, InputModal, ButtonModal, CloseButton, LoginButton} from "./ModalStyled";

const Modal = ({show, setShow}) => {
  const [loginForm, setLoginForm] = React.useState(true);
  // const [logged, setLogged] = React.useState('');

  function onChange(event){
    const {name, value} = event.target
    localStorage.setItem(name, JSON.stringify(value))
  }

  return(
    <Fragment>
      {show &&
        <Overlay>
          <WrapperModal>
            <HeaderModal>
              <h2>{loginForm ? 'Enter your mail address' : 'Create your account'}</h2>
            </HeaderModal>
            <CloseButton onClick={()=>setShow(false)}>
              X
            </CloseButton>
            <ContentModal>
              {!loginForm &&
                <InputWrapper>
                  <InputModal
                    id={'email'}
                    name={'email'}
                    onChange={onChange}
                    type='email'
                    value={'email'}
                  />
                </InputWrapper>

              }
              <InputWrapper>
                <InputModal
                  id={'username'}
                  name={'username'}
                  onChange={onChange}
                  type='text'
                  value={'username'}
                />
              </InputWrapper>
              {!loginForm &&
                <small>By creating an account, you agree to our Terms of Use, and acknowledge that you have read our Privacy Policy, Cookies Policy and UK & EU Privacy Rights.</small>
              }
              <ButtonModal>
                {loginForm? 'Entrar' : 'Crear cuenta'}
              </ButtonModal>
              <div style={{display: 'flex', gap: '0.5rem', alignItems: 'baseline'}}>
                <small>{loginForm? '¿Necesitas una cuenta?' : '¿Ya tienes una cuenta?'}</small>
                {loginForm &&
                  <LoginButton
                    onClick={()=>{setLoginForm(false)}}
                  >
                    Sign In
                  </LoginButton>
                }
                {!loginForm &&
                  <LoginButton
                    onClick={()=>{setLoginForm(true)}}
                  >
                    Log In
                  </LoginButton>
                }
              </div>
            </ContentModal>
          </WrapperModal>
        </Overlay>
      }
    </Fragment>
  )
};

export default Modal;
