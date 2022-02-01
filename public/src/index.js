async function getPost() { // получение всех постов
    let resPost = false
    try {
        resPost = await fetch(`http://localhost:5000/api/post`)
    } catch (e) {
        console.log(e)
    }
    return await resPost.json()
}

function getClothes (){
    const clothesLocalStorage = localStorage.getItem('clothes')
    if (clothesLocalStorage !== null){
        return JSON.parse(clothesLocalStorage)
    }
    return []
}
function putClothes(basket){
    let clothes = getClothes()
    const index = clothes.indexOf(basket)
    console.log(index)
    if (index === -1){
        clothes.push(basket)
    } else {
        clothes.splice(index, 1)
    }
    localStorage.setItem('clothes', JSON.stringify(clothes))
}

(async () => {
    const post = []
    post.push(await getPost())  // возвращает всех постов
    for (let i = 0; i < post.length; i++) {
        for (let objPost of post[i]) {
            console.log(objPost.img)
            let div2 = document.createElement('div')
            div2.setAttribute('class', 'DIV_CLIENT')

            let div3 = document.createElement('div')
            div3.innerText = "в корзину"
            div3.setAttribute('class', 'div_basket')

            let img = document.createElement('img')
            img.setAttribute('src', `${objPost.img}`)
            img.setAttribute('class', 'img_CLIENT')
            let lable1 = document.createElement('label')
            lable1.setAttribute('class', 'lable_CLIENT')
            let lable2 = document.createElement('label')
            lable2.setAttribute('class', 'lable_CLIENT')
            let lable3 = document.createElement('label')
            lable3.setAttribute('class', 'lable_CLIENT')
            let lable4 = document.createElement('label')
            lable4.setAttribute('class', 'lable_CLIENT')
            let lable5 = document.createElement('label')
            lable5.setAttribute('class', 'lable_CLIENT')
            let lable6 = document.createElement('label')
            lable6.setAttribute('class', 'lable_CLIENT')
            lable6.innerText = `ID: ${objPost.id}`
            lable1.innerText = `Название: ${objPost.title}`
            lable2.innerText = `Размер: ${objPost.razmer}`
            lable3.innerText = `Пол: ${objPost.gender}`
            lable4.innerText = `Описание: ${objPost.content}`
            lable5.innerText = `Цена: ${objPost.price}`
            let div1 = document.getElementsByClassName('divBlock')[0]
            div2.appendChild(div3)
            div2.appendChild(img)
            div2.appendChild(lable6)
            div2.appendChild(lable1)
            div2.appendChild(lable2)
            div2.appendChild(lable3)
            div2.appendChild(lable4)
            div2.appendChild(lable5)
            div1.appendChild(div2)
        }
    }
    let div_basket = document.getElementsByClassName('div_basket')
    for (let j = 0; j<div_basket.length; j++){
        div_basket[j].addEventListener('click', () => {
            let clothes_img = document.getElementsByClassName('DIV_CLIENT')[j].querySelector('img')
            let clothes_label = document.getElementsByClassName('DIV_CLIENT')[j].querySelectorAll('label')
            let clothes = new Object()
            clothes.img = clothes_img.src
            clothes.id = clothes_label[0].innerText.replace(/[^ ]+ /, '')
            clothes.title = clothes_label[1].innerText.replace(/[^ ]+ /, '')
            clothes.razmer = clothes_label[2].innerText.replace(/[^ ]+ /, '')
            clothes.gender = clothes_label[3].innerText.replace(/[^ ]+ /, '')
            clothes.content = clothes_label[4].innerText.replace(/[^ ]+ /, '')
            clothes.price = clothes_label[5].innerText.replace(/[^ ]+ /, '')
            putClothes(clothes)
        })
    }
})()












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