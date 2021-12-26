async function getPerson() { // получение всеъ пользователей
    let resUser = false
    try {
        resUser = await fetch(`http://localhost:5000/api/user`)
    } catch (e) {
        console.log(e)
    }
    return await resUser.json()
}


function createUser() { // создание пользователя
    let name = document.getElementById('name').value
    let surname = document.getElementById('surname').value
    let email = document.getElementById('email').value
    let number = document.getElementById('number').value
    let objValue = {
        name: name,
        surname: surname,
        email: email,
        number: number,
        role: 'user'
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



const a = []
function CheckingTheUsersAccount() {
    let email = document.getElementById('email').value
    for (let i = 0; i < a.length; i++) {
        for (let v of a[i]) {
            if (email === v.email) {
                alert('пользователь с таким email уже есть')
                return
            } else {
                createUser()
                return
            }

        }

    }

}

(async () => {
    a.push(await getPerson())  // возвращает всех пользователей
})()

