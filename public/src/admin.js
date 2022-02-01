document.addEventListener('DOMContentLoaded', function () {
    createElementPost()
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

// создание пользователя
function createUsers() {
    let name = document.getElementById('names').value
    let surname = document.getElementById('surnames').value
    let email = document.getElementById('emails').value
    let password = document.getElementById('passwords').value
    let number = document.getElementById('numbers').value
    let objValue = {
        name: name,
        surname: surname,
        email: email,
        password: password,
        number: number,
        role: 'admin'
    }
    console.log(objValue)

    fetch(`http://localhost:5000/api/user`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objValue)
    }).then(() => {
        alert('Успешно создан')
        createElementUser()
    }).catch((e) => {
        console.log(e)
    })

}

// изменение пользователя
function changesUsers() {
    let input = document.getElementsByClassName('admin_inputt')
    console.log(input[0].value)
    console.log(input[1].value)
    console.log(input[2].value)
    console.log(input[3].value)
    console.log(input[4].value)
    console.log(input[5].value)
    let objValue = {
        name: input[1].value,
        surname: input[2].value,
        email: input[3].value,
        number: input[4].value,
        role: input[5].value,
        id: input[0].value

    }
    console.log(objValue)

    fetch(`http://localhost:5000/api/user`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objValue)
    }).then(() => {
        alert('ok')
    }).catch((e) => {
        alert(e)
    })
    person()
}
function changesPost() {
    let input = document.getElementsByClassName('admin_inputt_post')

    let objValue = {
        title: input[1].value,
        razmer: input[2].value,
        gender: input[3].value,
        content: input[4].value,
        price: input[5].value,
        user_id:1,
        id: input[0].value

    }
    console.log(objValue)

    fetch(`http://localhost:5000/api/post`, {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objValue)
    }).then(() => {
        alert('ok')
        post()
    }).catch((e) => {
        alert(e)
    })

}


// удаление пользователя
function deleteUser(id) {
    fetch(`http://localhost:5000/api/user/${id}`, {
        method: 'DELETE',

    }).then(() => {
        console.log('ok')
    }).catch((e) => {
        console.log(e)
    })

}

function deletePost(id) {
    fetch(`http://localhost:5000/api/post/${id}`, {
        method: 'DELETE',

    }).then(() => {
        alert('Успешно удален')
        post()
    }).catch((e) => {
        alert(e)
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

// все пользователи
async function person() {
    deletElement()
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
            div1.appendChild(div2)
        }
    }
    let div_delete = document.getElementsByClassName('div_delete')
    for (let j = 0; j < div_delete.length; j++) {
        div_delete[j].addEventListener('click', (event) => {
            let coord = document.getElementsByClassName('divAdmin')[0].getBoundingClientRect()
            yesNou(coord.top)
            let yes = document.getElementsByClassName('div_yes')[0]
            let no = document.getElementsByClassName('div_no')[0]
            yes.addEventListener('click', () => {
                let div_lable = document.getElementsByClassName('DIV')[j].getElementsByClassName('DIV_LABLE')[0]
                deleteUser(parseInt(div_lable.innerText.substring(3)))
                person()
            })
            no.addEventListener('click', () => {
                document.getElementsByClassName('wat-page')[0].remove()
            })
        })
    }
    let div_chage = document.getElementsByClassName('div_change')
    for (let k = 0; k < div_chage.length; k++) {
        div_chage[k].addEventListener('click', (event) => {
            let div_lable = document.getElementsByClassName('DIV')[k].querySelectorAll('label')

            let div_izmenit = document.createElement('div')
            div_izmenit.innerText = "принять"
            div_izmenit.setAttribute('class', 'div_izmenit')

            let div_stop = document.createElement('div')
            div_stop.innerText = "отменить"
            div_stop.setAttribute('class', 'div_stop')

            let delete_div = document.getElementsByClassName('DIV')[k].getElementsByClassName('div_delete')[0]
            let change_div = document.getElementsByClassName('DIV')[k].getElementsByClassName('div_change')[0]


            delete_div.replaceWith(div_stop)
            change_div.replaceWith(div_izmenit)


            for (let l = 0; l < 6; l++) {
                console.log(div_lable[l])
                let input = document.createElement('input')
                input.setAttribute('class', 'admin_inputt')
                input.setAttribute('type', 'text')
                input.value = div_lable[l].innerText.replace(/[^ ]+ /, '')
                div_lable[l].replaceWith(input)
            }

            let stop = document.getElementsByClassName('div_stop')[0]
            let push = document.getElementsByClassName('div_izmenit')[0]

            push.addEventListener('click', () => {
                changesUsers()

            })

            stop.addEventListener('click', () => {
                person()
            })


        })
    }


}




// все посты
async function post() {
    deletElement()
    const post = []
    post.push(await getPost())  // возвращает всех постов
    for (let i = 0; i < post.length; i++) {
        for (let objPost of post[i]) {
            console.log(objPost.img)
            let div2 = document.createElement('div')
            div2.setAttribute('class', 'DIV_POST')

            let div3 = document.createElement('div')
            div3.innerText = "delete"
            div3.setAttribute('class', 'div_delete')
            let div4 = document.createElement('div')
            div4.innerText = "change"
            div4.setAttribute('class', 'div_change')

            let img = document.createElement('img')
            img.setAttribute('src', `${objPost.img}`)
            img.setAttribute('class', 'img_admin_POST')
            let lable1 = document.createElement('label')
            lable1.setAttribute('class', 'DIV_LABLE_POST')
            let lable2 = document.createElement('label')
            lable2.setAttribute('class', 'DIV_LABLE_POST')
            let lable3 = document.createElement('label')
            lable3.setAttribute('class', 'DIV_LABLE_POST')
            let lable4 = document.createElement('label')
            lable4.setAttribute('class', 'DIV_LABLE_POST')
            let lable5 = document.createElement('label')
            lable5.setAttribute('class', 'DIV_LABLE_POST')
            let lable6 = document.createElement('label')
            lable6.setAttribute('class', 'DIV_LABLE_POST')
            lable6.innerText = `ID: ${objPost.id}`
            lable1.innerText = `Название: ${objPost.title}`
            lable2.innerText = `Размер: ${objPost.razmer}`
            lable3.innerText = `Пол: ${objPost.gender}`
            lable4.innerText = `Описание: ${objPost.content}`
            lable5.innerText = `Цена: ${objPost.price}`

            let div1 = document.getElementsByClassName('divAdmin')[0]
            div2.appendChild(div3)
            div2.appendChild(div4)
            div2.appendChild(img)
            div2.appendChild(lable6)
            div2.appendChild(lable1)
            div2.appendChild(lable2)
            div2.appendChild(lable3)
            div2.appendChild(lable4)
            div2.appendChild(lable5)
            div1.appendChild(div2);
        }
    }
    let div_delete = document.getElementsByClassName('div_delete')
    for (let j = 0; j < div_delete.length; j++) {
        div_delete[j].addEventListener('click', (event) => {
            let coord = document.getElementsByClassName('divAdmin')[0].getBoundingClientRect()
            yesNou(coord.top)
            let yes = document.getElementsByClassName('div_yes')[0]
            let no = document.getElementsByClassName('div_no')[0]
            yes.addEventListener('click', () => {
                let div_lable = document.getElementsByClassName('DIV_POST')[j].getElementsByClassName('DIV_LABLE_POST')[0]
                deletePost(parseInt(div_lable.innerText.substring(3)))
            })
            no.addEventListener('click', () => {
                document.getElementsByClassName('wat-page')[0].remove()
            })
        })
    }
    let div_chage = document.getElementsByClassName('div_change')
    for (let k = 0; k < div_chage.length; k++) {
        div_chage[k].addEventListener('click', (event) => {
            let div_lable = document.getElementsByClassName('DIV_POST')[k].querySelectorAll('label')

            let div_izmenit = document.createElement('div')
            div_izmenit.innerText = "принять"
            div_izmenit.setAttribute('class', 'div_izmenit')

            let div_stop = document.createElement('div')
            div_stop.innerText = "отменить"
            div_stop.setAttribute('class', 'div_stop')

            let delete_div = document.getElementsByClassName('DIV_POST')[k].getElementsByClassName('div_delete')[0]
            let change_div = document.getElementsByClassName('DIV_POST')[k].getElementsByClassName('div_change')[0]


            delete_div.replaceWith(div_stop)
            change_div.replaceWith(div_izmenit)


            for (let l = 0; l < div_lable.length; l++) {
                console.log(div_lable[l])
                let input = document.createElement('input')
                input.setAttribute('class', 'admin_inputt_post')
                input.setAttribute('type', 'text')
                input.value = div_lable[l].innerText.replace(/[^ ]+ /, '')
                div_lable[l].replaceWith(input)
            }

            let stop = document.getElementsByClassName('div_stop')[0]
            let push = document.getElementsByClassName('div_izmenit')[0]

            push.addEventListener('click', () => {
                changesPost()
            })
            stop.addEventListener('click', () => {
                vizov()
            })
        })
    }
}
// создание пользователя
function createElementUser() {
    deletElement()
    let div1 = document.createElement('div')
    div1.setAttribute('class', 'login-page')

    let div2 = document.createElement('div')
    div2.setAttribute('class', 'form')

    let form = document.createElement('form')
    form.setAttribute('id', 'form')
    // form.setAttribute('method', 'POST')
    // form.setAttribute('action', '/api/user')
    form.setAttribute('class', 'login-form')

    let p = document.createElement('p')
    p.innerText = 'СОЗДАНИЕ ПОЛЬЗОВАТЕЛЯ'
    p.setAttribute('class', 'message')

    let in1 = document.createElement('input')
    in1.setAttribute('id', 'names')
    in1.setAttribute('class', 'registr')
    in1.setAttribute('name', 'name')
    in1.setAttribute('type', 'text')
    in1.setAttribute('placeholder', 'введите имя')

    let in2 = document.createElement('input')
    in2.setAttribute('id', 'surnames')
    in2.setAttribute('class', 'registr')
    in2.setAttribute('name', 'surname')
    in2.setAttribute('type', 'text')
    in2.setAttribute('placeholder', 'введите фамилию')

    let in3 = document.createElement('input')
    in3.setAttribute('id', 'emails')
    in3.setAttribute('class', 'registr')
    in3.setAttribute('name', 'email')
    in3.setAttribute('type', 'text')
    in3.setAttribute('placeholder', 'введите email')

    let in4 = document.createElement('input')
    in4.setAttribute('id', 'passwords')
    in4.setAttribute('class', 'registr')
    in4.setAttribute('name', 'password')
    in4.setAttribute('type', 'text')
    in4.setAttribute('placeholder', 'введите пароль')

    let in5 = document.createElement('input')
    in5.setAttribute('id', 'numbers')
    in5.setAttribute('class', 'registr')
    in5.setAttribute('name', 'number')
    in5.setAttribute('type', 'text')
    in5.setAttribute('placeholder', 'введите телефон')

    let button = document.createElement('button')
    button.innerText = 'создать'
    // button.setAttribute('type', 'submit')
    button.setAttribute('id', 'button_submit')

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


    let buttonsa = document.getElementById('button_submit')
    buttonsa.addEventListener('click', (event) => {
        createUsers()
        event.preventDefault();
    })
}


// создание поста
function createElementPost() {
    deletElement()
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

function yesNou(coord) {
    let div1 = document.createElement('div')
    div1.setAttribute('class', 'wat-page')
    let res = Math.abs(coord)
    div1.style.padding = `${res}px 0 0`

    let div2 = document.createElement('div')
    div2.setAttribute('class', 'wat_page_2')
    let pMessage = document.createElement('p')
    pMessage.setAttribute('class', 'pMessage')
    pMessage.innerText = 'вы точно хотите удалить данного пользователя ?'

    let div3 = document.createElement('div')
    div3.innerText = "yes"
    div3.setAttribute('class', 'div_yes')
    let div4 = document.createElement('div')
    div4.innerText = "no"
    div4.setAttribute('class', 'div_no')

    let divAdmin = document.getElementsByClassName('divAdmin')[0]

    divAdmin.appendChild(div1)
    div1.appendChild(div2)
    div2.appendChild(pMessage)
    div2.appendChild(div3)
    div2.appendChild(div4)
}

function vizov(){
    post()
}
function deletElement() {
    let deleteElement = divAdmin.querySelectorAll('div')
    if (deleteElement.length > 0) {
        for (let i = 0; i < deleteElement.length; i++) {
            deleteElement[i].remove();
        }
    }
}