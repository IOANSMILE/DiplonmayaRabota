async function getOnePost(id) { // получение поста по id
    let resPostID = false
    try {
        resPostID = await fetch(`http://localhost:5000/api/post/${id}`)
    } catch (e) {
        console.log(e)
    }
    return await resPostID.json()
}

async function getPost() { // получение всез постов
    let resPost = false
    try {
        resPost = await fetch(`http://localhost:5000/api/post`)
    } catch (e) {
        console.log(e)
    }
    return await resPost.json()
}






async function getPerson() { // получение всех пользователей
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

// async function authLoginIN (){
//     let resUser = false
//     try {
//         resUser = await fetch(`http://localhost:5000/auth/login`)
//     } catch (e) {
//         console.log(e)
//     }
//     return await resUser.json()
// }




(async () => {


    // console.log(await authLoginIN())
    console.log(await getPost())
    console.log(await getOnePost(2))
    const a = []
    a.push(await getPerson())  // возвращает всех пользователей
    for (let i = 0; i < a.length; i++) {
        for (let v of a[i]) {
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
            lable1.innerText = `название: ${v.name}`
            lable2.innerText = `размер: ${v.surname}`
            lable3.innerText = `осписание: ${v.email}`
            lable4.innerText = `цена: ${v.role}`


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