const form = document.querySelector(".login-form");

form.addEventListener("submit", handlerSubmit);

function handlerSubmit(evt) {
  evt.preventDefault();

  const { email, password } = evt.currentTarget.elements;

  if (email.value == "" || password.value == "") {
    return alert("Всі поля повинні бути заповнені!");
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    console.log(formData);
  }
  form.reset();
}

/********* 2nd variant ********/

// function handlerSubmit(evt) {
//   evt.preventDefault();

//   const { email, password } = evt.currentTarget.elements;
//   console.log(email);
//   console.log(password);

//   if (email.value == "" || password.value == "") {
//     return alert("Всі поля повинні бути заповнені!");
//   } else {
//     const formData = new FormData(evt.currentTarget);
//     const data = {};
//     console.log(formData);
//     formData.forEach((value, key) => {
//       data[key] = value;
//     });
//     console.log(data);
//   }
// form.reset();
// }
