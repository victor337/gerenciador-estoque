function validateEmail() {
    //Obtém o elemento de input de e-mail
    var emailField = document.getElementById('idemail');
    //Obtém o valor do campo de e-mail
    var email = emailField.value;
    //Define uma expressão regular para validar o formato do e-mail
    var expectedvalue = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //Testa o valor do e-mail em relação à expressão regular
    if (!expectedvalue.test(email)) {
        //Se o teste falhar, exibe um alerta e impede o envio do formulário
        alert("Por favor, insira um e-mail válido.");
        return false;
    }
    //Se o teste passar, permite o envio do formulário
    return true;
}


function getProduct(){
    let inputText = document.getElementById('nameProduct');
    console.log('nameProduct' + inputText);
}


getProduct();