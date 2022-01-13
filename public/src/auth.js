// function loginIN() { // создание пользователя
//     let email = document.getElementById('emailLoginIN').value
//     let password = document.getElementById('passwordLoginIN').value
//     let objValue = {
//         email: email,
//         password: password,
//     }
//     fetch(`http://localhost:5000/auth/login`, {
//         method: 'POST',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(objValue)
//     }).then(() => {
//         console.log('ok')
//     }).catch((e) => {
//         console.log(e)
//     })
// }
//
// document.addEventListener('DOMContentLoaded', function () {
//     let form = document.getElementById('formLoginIN')
//     form.addEventListener('submit', (event) => {
//         loginIN()
//         event.preventDefault();
//     })
// })
//
