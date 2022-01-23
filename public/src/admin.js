document.addEventListener('DOMContentLoaded', function () {
    let divPerson = document.getElementById('AllPerson')
    divPerson.addEventListener('click', function (event) {
        person()
    })
    let divPost = document.getElementById('AllPost')
    divPost.addEventListener('click', function (event) {
       post()
    })
    let divCreateUser = document.getElementById('CreateUser')
    divCreateUser.addEventListener('click', () => {
        createElementUser()

    })
    let divCreatePost = document.getElementById('CreatePost')
    divCreatePost.addEventListener('click', () => {
        createElementPost()
    })
})

// удаление пользователя
function deleteUser() {
    let id = document.getElementById('deletID').value
    fetch(`http://localhost:5000/api/user/${id}`, {
        method: 'DELETE',

    }).then(() => {
        console.log('ok')
    }).catch((e) => {
        console.log(e)
    })
}
// получение всех постов
async function getPost() {
    let resPost = false
    try {
        resPost = await fetch(`http://localhost:5000/api/post`)
    } catch (e) {
        console.log(e)
    }
    return await resPost.json()
}

// получение всех пользователей
async function getPerson() {
    let resUser = false
    try {
        resUser = await fetch(`http://localhost:5000/api/user`)
    } catch (e) {
        console.log(e)
    }
    return await resUser.json()
}




async function person(){
    deletElement ()
    const user = []
    user.push(await getPerson())  // возвращает всех пользователей
    for (let i = 0; i < user.length; i++) {
        for (let objUser of user[i]) {
            let div1 = document.getElementsByClassName('divAdmin')[0]
            let div2 = document.createElement('div')
            div2.setAttribute('class', 'DIV')
            let div3 = document.createElement('div')
            div3.innerText = "delete"
            div3.setAttribute('class', 'div_delete')
            let div4 = document.createElement('div')
            div4.innerText = "change"
            div4.setAttribute('class', 'div_change')
            let lable1 = document.createElement('label')
            lable1.setAttribute('class', 'DIV_LABLE')
            let lable2 = document.createElement('label')
            lable2.setAttribute('class', 'DIV_LABLE')
            let lable3 = document.createElement('label')
            lable3.setAttribute('class', 'DIV_LABLE')
            let lable4 = document.createElement('label')
            lable4.setAttribute('class', 'DIV_LABLE')
            let lable5 = document.createElement('label')
            lable5.setAttribute('class', 'DIV_LABLE')
            let lable6 = document.createElement('label')
            lable6.setAttribute('class', 'DIV_LABLE')

            lable1.innerText = `ID: ${objUser.id}`
            lable2.innerText = `Имя: ${objUser.name}`
            lable3.innerText = `Фамилия: ${objUser.surname}`
            lable4.innerText = `Email: ${objUser.email}`
            lable5.innerText = `Телефон: ${objUser.number}`
            lable6.innerText = `Role: ${objUser.role}`


            div2.appendChild(div3)
            div2.appendChild(div4)
            div2.appendChild(lable1)
            div2.appendChild(lable2)
            div2.appendChild(lable3)
            div2.appendChild(lable4)
            div2.appendChild(lable5)
            div2.appendChild(lable6)
            div1.appendChild(div2);
        }

    }

}


async function post(){
    deletElement ()
    const post = []
    post.push(await getPost())  // возвращает всех пользователей
    for (let i = 0; i < post.length; i++) {
        for (let objPost of post[i]) {
            console.log(objPost.img)
            let div2 = document.createElement('div')
            div2.setAttribute('class', 'DIV')
            let img = document.createElement('img')
            img.setAttribute('src', `${objPost.img}`)
            img.setAttribute('class', 'img_admin')
            let lable1 = document.createElement('label')
            lable1.setAttribute('class', 'DIV_LABLE')
            let lable2 = document.createElement('label')
            lable2.setAttribute('class', 'DIV_LABLE')
            let lable3 = document.createElement('label')
            lable3.setAttribute('class', 'DIV_LABLE')
            let lable4 = document.createElement('label')
            lable4.setAttribute('class', 'DIV_LABLE')
            lable1.innerText = `название: ${objPost.title}`
            lable2.innerText = `размер: ${objPost.razmer}`
            lable3.innerText = `осписание: ${objPost.gender}`
            lable4.innerText = `цена: ${objPost.content}`

            let div1 = document.getElementsByClassName('divAdmin')[0]
            div2.appendChild(img)
            div2.appendChild(lable1)
            div2.appendChild(lable2)
            div2.appendChild(lable3)
            div2.appendChild(lable4)
            div1.appendChild(div2);
        }

    }

}

function createElementUser (){
    deletElement ()
    let div1 = document.createElement('div')
    div1.setAttribute('class', 'login-page')

    let div2 = document.createElement('div')
    div2.setAttribute('class', 'form')

    let form = document.createElement('form')
    form.setAttribute('id', 'form')
    form.setAttribute('method', 'POST')
    form.setAttribute('action', '/api/user')
    form.setAttribute('class', 'login-form')

    let p = document.createElement('p')
    p.innerText = 'СОЗДАНИЕ ПОЛЬЗОВАТЕЛЯ'
    p.setAttribute('class', 'message')

    let in1 = document.createElement('input')
    in1.setAttribute('id', 'name')
    in1.setAttribute('class', 'registr')
    in1.setAttribute('name', 'name')
    in1.setAttribute('type', 'text')
    in1.setAttribute('placeholder', 'введите имя')

    let in2 = document.createElement('input')
    in2.setAttribute('id', 'surname')
    in2.setAttribute('class', 'registr')
    in2.setAttribute('name', 'surname')
    in2.setAttribute('type', 'text')
    in2.setAttribute('placeholder', 'введите фамилию')

    let in3 = document.createElement('input')
    in3.setAttribute('id', 'email')
    in3.setAttribute('class', 'registr')
    in3.setAttribute('name', 'email')
    in3.setAttribute('type', 'text')
    in3.setAttribute('placeholder', 'введите email')

    let in4 = document.createElement('input')
    in4.setAttribute('id', 'password')
    in4.setAttribute('class', 'registr')
    in4.setAttribute('name', 'password')
    in4.setAttribute('type', 'text')
    in4.setAttribute('placeholder', 'введите пароль')

    let in5 = document.createElement('input')
    in5.setAttribute('id', 'number')
    in5.setAttribute('class', 'registr')
    in5.setAttribute('name', 'number')
    in5.setAttribute('type', 'text')
    in5.setAttribute('placeholder', 'введите телефон')

    let button = document.createElement('button')
    button.innerText = 'создать'
    button.setAttribute('type', 'submit')

    let divAdmin = document.getElementsByClassName('divAdmin')[0]
    divAdmin.appendChild(div1)
    div1.appendChild(div2)
    div2.appendChild(form)
    form.appendChild(p)
    form.appendChild(in1)
    form.appendChild(in2)
    form.appendChild(in3)
    form.appendChild(in4)
    form.appendChild(in5)
    form.appendChild(button)
}


// function createUser() { // создание пользователя
//     let name = document.getElementById('name').value
//     let surname = document.getElementById('surname').value
//     let email = document.getElementById('email').value
//     let password = document.getElementById('password').value
//     let number = document.getElementById('number').value
//     let objValue = {
//         name: name,
//         surname: surname,
//         email: email,
//         password: password,
//         number: number,
//         role: 'admin'
//     }
//
//     fetch(`http://localhost:5000/api/user`, {
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

function createElementPost (){
    deletElement ()
    let div1 = document.createElement('div')
    div1.setAttribute('class', 'login-page')

    let div2 = document.createElement('div')
    div2.setAttribute('class', 'form')

    let form = document.createElement('form')
    form.setAttribute('id', 'form')
    form.setAttribute('method', 'POST')
    form.setAttribute('action', '/api/post')
    form.setAttribute('enctype', 'multipart/form-data')
    form.setAttribute('class', 'login-form')

    let p = document.createElement('p')
    p.innerText = 'СОЗДАНИЕ ПОСТА'
    p.setAttribute('class', 'message')

    let in1 = document.createElement('input')
    in1.setAttribute('id', 'img')
    in1.setAttribute('class', 'registr')
    in1.setAttribute('name', 'filedata')
    in1.setAttribute('type', 'file')

    let in2 = document.createElement('input')
    in2.setAttribute('class', 'registr')
    in2.setAttribute('name', 'title')
    in2.setAttribute('type', 'text')
    in2.setAttribute('placeholder', 'введите название')

    let in3 = document.createElement('input')
    in3.setAttribute('class', 'registr')
    in3.setAttribute('name', 'razmer')
    in3.setAttribute('type', 'text')
    in3.setAttribute('placeholder', 'введите размер')

    let in4 = document.createElement('input')
    in4.setAttribute('class', 'registr')
    in4.setAttribute('name', 'gender')
    in4.setAttribute('type', 'text')
    in4.setAttribute('placeholder', 'введите пол')

    let in5 = document.createElement('input')
    in5.setAttribute('class', 'registr')
    in5.setAttribute('name', 'content')
    in5.setAttribute('type', 'text')
    in5.setAttribute('placeholder', 'введите описание')

    let in6 = document.createElement('input')
    in6.setAttribute('class', 'registr')
    in6.setAttribute('name', 'price')
    in6.setAttribute('type', 'text')
    in6.setAttribute('placeholder', 'введите цену')

    let in7 = document.createElement('input')
    in7.setAttribute('class', 'registr')
    in7.setAttribute('name', 'user_id')
    in7.setAttribute('type', 'text')
    in7.setAttribute('placeholder', 'введите id')

    let button = document.createElement('button')
    button.innerText = 'создать'
    button.setAttribute('id', 'submit')
    button.setAttribute('type', 'submit')

    let divAdmin = document.getElementsByClassName('divAdmin')[0]

    divAdmin.appendChild(div1)
    div1.appendChild(div2)
    div2.appendChild(form)
    form.appendChild(p)
    form.appendChild(in1)
    form.appendChild(in2)
    form.appendChild(in3)
    form.appendChild(in4)
    form.appendChild(in5)
    form.appendChild(in6)
    form.appendChild(in7)
    form.appendChild(button)


}







function deletElement (){
    let deleteElement = divAdmin.querySelectorAll('div')
    if (deleteElement.length > 0){
        for (let i = 0; i < deleteElement.length; i++) {
            deleteElement[i].remove();
        }
    }
}