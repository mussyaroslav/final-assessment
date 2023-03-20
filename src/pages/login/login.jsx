import './login.css'
import { Link, useNavigate, Navigate } from "react-router-dom";
import { useRef } from 'react';
import { validateLoginOn, validatePasswordOn, validateLoginAndPassword } from './loginUtils'

function Login() {

  const inputLoginOn = useRef()
  const inputPasswordOn = useRef()
  const errorLoginOn = useRef()
  const errorPasswordOn = useRef()
  const loginAndPasswordError = useRef()
  const navigateToHome = useNavigate()

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';


  const loginBtn = (e) => {
    e.preventDefault()

    validateLoginOn(inputLoginOn, errorLoginOn)
    validatePasswordOn(inputPasswordOn, errorPasswordOn)

    validateLoginAndPassword(inputLoginOn, inputPasswordOn, loginAndPasswordError, navigateToHome)

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
                <Link className='link__login' to={'/register'}>Зарегистрироваться</Link>
              </div>
              <div className='login__title__div'>
                <h1>Вход</h1>
              </div>
            </div>
            <div className='login__main'>
              <div className='login__input__div'>
                <input ref={inputLoginOn} className='login__input' type='text' placeholder='Логин' />
              </div>
              <div className='login__error__div'>
                <p ref={errorLoginOn} id='register-login-error' className='login__error'></p>
              </div>
            </div>
            <div className='password__main'>
              <div className='login__input__div'>
                <input ref={inputPasswordOn} className='login__input' type='password' placeholder='Пароль' />
              </div>
              <div className='login__error__div'>
                <p ref={errorPasswordOn} id='register-password-error' className='login__error'></p>
              </div>
            </div>
            <div className='checkbox__main'>
              <div className='checkbox__input__div'>
                <input id="custom-checkbox" type="checkbox" className="custom-checkbox" />
                <label htmlFor ="custom-checkbox"></label>
                <p className="politic">Я согласен получать обновления на почту</p>
              </div>
            </div>
            <div className='login__btn__div1'>
              <p ref={loginAndPasswordError} className='login__and__password__error'></p>
              <button onClick={loginBtn} className='login__btn'>Войти</button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Login