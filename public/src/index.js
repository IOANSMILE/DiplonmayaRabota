async function getPost(id) { // получение поста
    let resPostID = false
    try {
        resPostID = await fetch(`http://localhost:5000/api/post/?id=${id}`)
    } catch (e) {
        console.log(e)
    }
    return await resPostID.json()
}

async function getPerson() { // получение всеъ пользователей
    let resUser = false
    try {
        resUser = await fetch(`http://localhost:5000/api/user`)
    } catch (e) {
        console.log(e)
    }
    return await resUser.json()
}

async function getOnePerson(id) { // получение одного пользователя
    let resUser = false
    try {
        resUser = await fetch(`http://localhost:5000/api/user/${id}`)
    } catch (e) {
        console.log(e)
    }
    return await resUser.json()

}

function createUser() { // создание пользователя
    let in1 = document.getElementById('name').value
    let in2 = document.getElementById('surname').value

    let obj = {
        name: in1,
        surname: in2
    }
    console.log(in1)
    console.log(in2)
    fetch(`http://localhost:5000/api/user`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(obj)
    }).then(() => {
        console.log('ok')
    }).catch((e) => {
        console.log(e)
    })
}


(async () => {
    console.log(await getOnePerson(3)) // возвращает конкретного пользователя
    const [vs, zb, io] = await getPerson() // возвращает всех пользователей
    const [post] = await getPost(3) // возвращает пост
    console.log(post)
    console.log(vs, zb, io)
    let div_1 = document.getElementById('id')
    let div_2 = document.getElementById('title')
    let div_3 = document.getElementById('content')
    div_1.innerText = post.id
    div_2.innerText = post.title
    div_3.innerText = post.content
})()
    // .then(data => console.log(data))
    // .catch(err => console.log(err))


// вот так выглядит деструктуризация массивов и объектов
// let arr = [{id: 1}, {id: 2}, {id: 3}]
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
//
// const [id1, id2, id3] = arr
// console.log(id1)
// console.log(id2)
// console.log(id3)
//
// console.log('=================================================')
// let obj = {key:1, title:"tgtg", value:{id:14}}
//
// console.log(obj.key)
// console.log(obj.title)
// console.log(obj.value)
//
// const {key, title, value} = obj
// console.log(key)
// console.log(title)
// console.log(value)


// (() => {})()  самовызывающаяся функция


// поменять значения 2 элемента массива не создавая 3тию переменную

//TODO:рассказать async await,промисы и сделать пример на таймерах