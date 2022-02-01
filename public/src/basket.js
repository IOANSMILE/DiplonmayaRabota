document.addEventListener('DOMContentLoaded', function () {
    createBasket(getClothes())
})
function getClothes() {
    let basket = localStorage.getItem('clothes')
    basket = JSON.parse(basket)
    return basket
}
function createBasket(basketStorage) {
    let price = 0
    let body = document.getElementsByClassName('divAdmin')[0]
    basketStorage.forEach(basketStorage => {
        let basket_div = document.createElement('div')
        basket_div.setAttribute('class', 'DIV_BASKET')
        let delele_div = document.createElement('div')
        delele_div.innerText = "удалить"
        delele_div.setAttribute('class', 'div_delete_clothes')
        let img = document.createElement('img')
        img.setAttribute('src', `${basketStorage.img}`)
        img.setAttribute('class', 'img_BASKET')
        let lable_basket_1 = document.createElement('label')
        lable_basket_1.setAttribute('class', 'LABLE_BASKET')
        let lable_basket_2 = document.createElement('label')
        lable_basket_2.setAttribute('class', 'LABLE_BASKET')
        let lable_basket_3 = document.createElement('label')
        lable_basket_3.setAttribute('class', 'LABLE_BASKET')
        let lable_basket_4 = document.createElement('label')
        lable_basket_4.setAttribute('class', 'LABLE_BASKET')
        let lable_basket_5 = document.createElement('label')
        lable_basket_5.setAttribute('class', 'LABLE_BASKET')
        let lable_basket_6 = document.createElement('label')
        lable_basket_6.setAttribute('class', 'LABLE_BASKET')
        lable_basket_6.innerText = `ID: ${basketStorage.id}`
        lable_basket_1.innerText = `Название: ${basketStorage.title}`
        lable_basket_2.innerText = `Размер: ${basketStorage.razmer}`
        lable_basket_3.innerText = `Пол: ${basketStorage.gender}`
        lable_basket_4.innerText = `Описание: ${basketStorage.content}`
        lable_basket_5.innerText = `Цена: ${basketStorage.price}`
        price = price + parseInt(basketStorage.price)
        basket_div.appendChild(delele_div)
        basket_div.appendChild(img)
        basket_div.appendChild(lable_basket_6)
        basket_div.appendChild(lable_basket_1)
        basket_div.appendChild(lable_basket_2)
        basket_div.appendChild(lable_basket_3)
        basket_div.appendChild(lable_basket_4)
        basket_div.appendChild(lable_basket_5)
        body.appendChild(basket_div)
    })
    // перебор и удаление элементов
    let deleteListener = document.querySelectorAll('.DIV_BASKET .div_delete_clothes');
    deleteListener.forEach(сlicked)
    // установка текста и цены за все
    let href = document.getElementsByClassName('price')[1]
    href.innerText = `Купись все за: ${price} RUB`
    // слушатель кнопки купить
    let div_pay = document.getElementsByClassName('price')[1]
    div_pay.addEventListener('click', () => {
        toPay()
    })
}
// слушатель нажатия элементов
function сlicked(div, index) {
    let kill = document.querySelectorAll('.DIV_BASKET');
    div.addEventListener('click', () => {
        const parsed = JSON.parse(localStorage.getItem('clothes'))
        parsed.splice(parsed.indexOf(parsed[index]), 1);
        localStorage.setItem('clothes', JSON.stringify(parsed))
        kill[index].remove()
        toPay()
    })
}
// переход на страницу оплаты
function toPay (){
    const clothesLocalStorage = JSON.parse(localStorage.getItem('clothes'))
    let href = document.getElementsByClassName('price')[1]
    if (clothesLocalStorage.length !==0){
        href.setAttribute('href', 'basket/pay')
    } else {
        href.innerText = `У вас пустая корзина`
        href.removeAttribute('href')
    }
}
