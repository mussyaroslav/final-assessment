export const validateLoginAndPassword = (inputLoginOn, inputPasswordOn, loginAndPasswordError, navigateToHome) => {
  let data = JSON.parse(localStorage.getItem('data')) || [];
  let existingUserIndex = data.findIndex(user => user.login === inputLoginOn.current.value && user.password === inputPasswordOn.current.value);
  if (existingUserIndex !== -1) {
    localStorage.setItem('isLoggedIn', 'true');
    navigateToHome('/');
  } else if ((existingUserIndex === -1) && (inputLoginOn.current.value !== '' && inputLoginOn.current.value.length >= 4)
      && (inputPasswordOn.current.value !== '' && inputPasswordOn.current.value.length >= 4)) {
    loginAndPasswordError.current.innerHTML = 'Логин или пароль неверен';
  }
}

export const validateLoginOn = (inputLoginOn, errorLoginOn) => {
  if(inputLoginOn.current.value === '') {
    errorLoginOn.current.innerHTML = 'Поле не должно быть пустым'
  } else if(inputLoginOn.current.value.length < 4) {
    errorLoginOn.current.innerHTML = 'Логин должен содержать не менее 4-х символов'
  } else {
    errorLoginOn.current.innerHTML = ''
  }
} 

export const validatePasswordOn = (inputPasswordOn, errorPasswordOn) => {
  if(inputPasswordOn.current.value === '') {
    errorPasswordOn.current.innerHTML = 'Поле не должно быть пустым'
  } else if(inputPasswordOn.current.value.length < 4) {
    errorPasswordOn.current.innerHTML = 'Пароль должен содержать не менее 4-х символов'
  } else {
    errorPasswordOn.current.innerHTML = ''
  }
}