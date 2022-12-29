let password = document.getElementById('senha')
let img = document.getElementById('img')

function ShowHidden() {
    if (password.type === 'password') {
    senha.setAttribute('type', 'text');
    img.classList.add('hide');
    }

    else {
        senha.setAttribute('type', 'password');
        img.classList.remove('hide');
    }
}
