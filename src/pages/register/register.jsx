import './register.css'
import './custom-checkbox.css'
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useRef } from 'react';
import { updateUser, validateLogin, validatePassword, validateCheckbox } from './registerUtils';

function Register() {

  const inputLogin = useRef()
  const inputPassword = useRef()
  const inputCheckbox = useRef()
  const errorLogin = useRef()
  const errorPassword = useRef()
  const navigateToLogin = useNavigate()
  let userData = {}

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';


  const registerBtn = (e) => {
    e.preventDefault();

    validateLogin(inputLogin, errorLogin, userData);
    validatePassword(inputPassword, errorPassword, userData);
    validateCheckbox(inputCheckbox, userData)

    if((inputLogin.current.value !== '' && inputLogin.current.value.length >= 4) && (inputPassword.current.value !== '' && inputPassword.current.value.length >= 4)) {
      updateUser(userData, inputLogin, inputPassword, inputCheckbox, navigateToLogin);
    }
  }

  if(isLoggedIn) {
    return (
      <Navigate to='/' />
    )
  } else {
    return (
      <div className='main-login'>
        <div className='login__main__div'>
          <form className='form'>
            <div>
              <div className='link__login__div'>
                <Link className='link__login' to={'/login'}>Авторизоваться</Link>
              </div>
              <div className='login__title__div'>
                <h1>Регистрация</h1>
              </div>
            </div>
            <div className='login__main'>
              <div className='login__input__div'>
                <input ref={inputLogin} className='login__input' type='text' placeholder='Логин' />
              </div>
              <div className='login__error__div'>
                <p ref={errorLogin} id='redister-login-error' className='login__error'></p>
              </div>
            </div>
            <div className='password__main'>
              <div className='login__input__div'>
                <input ref={inputPassword} className='login__input' type='password' placeholder='Пароль' />
              </div>
              <div className='login__error__div'>
                <p ref={errorPassword} id='register-password-error' className='login__error'></p>
              </div>
            </div>
            <div className='checkbox__main'>
              <div className='checkbox__input__div'>
                <input ref={inputCheckbox} id="custom-checkbox" type="checkbox" className="custom-checkbox" />
                <label htmlFor ="custom-checkbox"></label>
                <p className="politic">Я согласен получать обновления на почту</p>
              </div>
            </div>
            <div className='login__btn__div'>
              <button onClick={registerBtn} className='login__btn'>Зарегистрироваться</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Register