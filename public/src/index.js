async function getPost(id) {
    let res = false
    try {
        res = await fetch(`http://localhost:5000/api/post/?id=${id}`)
    } catch (e) {
        console.log(e)
    }
    return await res.json()
}

(async () => {
    const [post] = await getPost(3)
    console.log(post)
    let div_1 = document.getElementById('id')
    let div_2 = document.getElementById('title')
    let div_3 = document.getElementById('content')
    div_1.innerText = post.id
    div_2.innerText = post.title
    div_3.innerText = post.content

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