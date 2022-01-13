function deleteUser() { // создание пользователя
    let id = document.getElementById('deletID').value
    fetch(`http://localhost:5000/api/user/${id}`, {
        method: 'DELETE',

    }).then(() => {
        console.log('ok')
    }).catch((e) => {
        console.log(e)
    })
}

document.addEventListener('DOMContentLoaded', function () {
    let buttonDelete = document.getElementById('deletUserID')
    buttonDelete.addEventListener('onclick', (event) => {
        deleteUser()
        event.preventDefault();
    })
})