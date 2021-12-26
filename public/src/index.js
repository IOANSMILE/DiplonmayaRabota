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
    console.log(await getOnePerson(1)) // возвращает конкретного пользователя
    const a = []
    a.push(await getPerson())  // возвращает всех пользователей
    const b = []
        b.push(await getPost(1))
    for (let i = 0; i < b.length; i++) {
        for (let v of b[i]) {
            let div1 = document.getElementsByClassName('divBlock')[0]
            let div2 = document.createElement('div')
            div2.setAttribute('class', 'line_blockk')
            let img = document.createElement('img')
            img.setAttribute('src', 'http://localhost:5000/upload/bebu_776_s_807_1_1-14+.jpg')
            img.setAttribute('class', 'img')
            let lable1 = document.createElement('label')
            lable1.setAttribute('class', 'lable_div')
            let lable2 = document.createElement('label')
            lable2.setAttribute('class', 'lable_div')
            let lable3 = document.createElement('label')
            lable3.setAttribute('class', 'lable_div')
            let lable4 = document.createElement('label')
            lable4.setAttribute('class', 'lable_div')
            lable1.innerText = `название: ${v.title}`
            lable2.innerText = `размер: ${v.razmer}`
            lable3.innerText = `осписание: ${v.content}`
            lable4.innerText = `цена: ${v.price}`


            div2.appendChild(img)
            div2.appendChild(lable1)
            div2.appendChild(lable2)
            div2.appendChild(lable3)
            div2.appendChild(lable4)
            div1.appendChild(div2);
        }

    }

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