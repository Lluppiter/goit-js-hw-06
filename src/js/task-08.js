const form = document.querySelector('.login-form');
form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === '' || password.value === '') {
    alert('всі поля повинні бути заповнені');
  } else {
    const userLoginDetails = {
      email: email.value,
      password: password.value,
    };
    console.log(userLoginDetails);
    form.reset();
  }
});
