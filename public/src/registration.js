function createUser() { // создание пользователя
    let name = document.getElementById('name').value
    let surname = document.getElementById('surname').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let number = document.getElementById('number').value
    let objValue = {
        name: name,
        surname: surname,
        email: email,
        password: password,
        number: number,
        role: 'admin'
    }

    fetch(`http://localhost:5000/api/user`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objValue)
    }).then(() => {
        console.log('ok')
    }).catch((e) => {
        console.log(e)
    })
}

document.addEventListener('DOMContentLoaded', function () {
    let form = document.getElementById('form')
    form.addEventListener('submit', (event) => {
        createUser()
        event.preventDefault();
    })
})



