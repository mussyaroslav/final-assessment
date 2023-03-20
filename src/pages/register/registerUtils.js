export const updateUser = (userData, inputLogin, inputPassword, inputCheckbox, navigateToLogin) => {
  let data = JSON.parse(localStorage.getItem('data')) || [];
  // Проверка, есть ли email уже в массиве данных
  let existingUserIndex = data.findIndex(user => user.login === inputLogin.current.value);
  if (existingUserIndex !== -1) {
    // Обновление пароля если есть
    data[existingUserIndex].password = inputPassword.current.value;
    data[existingUserIndex].checked = inputCheckbox.current.checked
  } else {
    // Добавление нового пользователя в массив для последующей записи в дату
    data.push(userData);
  }
  // Запись обновленного массива данных обратно в локальное хранилище
  localStorage.setItem('data', JSON.stringify(data));
  navigateToLogin('/login')
};

export const validateLogin = (inputLogin, errorLogin, userData) => {
  if(inputLogin.current.value === '') {
    errorLogin.current.innerHTML = 'Поле не должно быть пустым'
  } else if (inputLogin.current.value.length < 4) {
    errorLogin.current.innerHTML = 'Логин должен содержать не менее 4-х символов'
  } else {
    errorLogin.current.innerHTML = ''
    userData.login = inputLogin.current.value
  }
};

export const validatePassword = (inputPassword, errorPassword, userData) => {
  if(inputPassword.current.value === '') {
    errorPassword.current.innerHTML = 'Поле не должно быть пустым'
  } else if (inputPassword.current.value.length < 4) {
    errorPassword.current.innerHTML = 'Пароль должен содержать не менее 4-х символов'
  } else {
    errorPassword.current.innerHTML = ''
    userData.password = inputPassword.current.value
  }
};

export const validateCheckbox = (inputCheckbox, userData) => {
  if(inputCheckbox.current.checked === true) {
    userData.checked = inputCheckbox.current.checked
  } else {
    userData.checked = inputCheckbox.current.checked
  }
};
