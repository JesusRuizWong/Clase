//captura del elemento que dispara un evento
const btnLogin = document.querySelector('#btn-login');

//la funcion y el evento
btnLogin.onclick = function(event){
    event.preventDefault();

    const inputs = document.querySelectorAll('input')
    //inserta un valor o almacenar al localstorage
    inputs.forEach((input)=>{
        console.log(input)
        localStorage.setItem(input.name, input.value)
    })
}