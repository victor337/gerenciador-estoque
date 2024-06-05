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


function login(){
    let email = document.getElementById("idemail").value;
    let pass = document.getElementById("idpassword").value;
    
    console.log(email);

    $.ajax({
        url: 'login.php',
        method: 'POST',
        dataType: 'json',
        data: {
          email: email,
          pass: pass,
        },
        success: function(response){
          if(response == 'no_user'){
            alert('Usuário ou senha inválidos');
          } else {
            window.location.href = "../list_products/list_products_page.html";
          }
        },
        error: function(request, status, error){
          console.log(request);
          console.log(status);
          console.log(error);
        },
      });

}

document.getElementById('login-button').onclick = function() {
    if(validateEmail()){
        login();
    } else {

    }
  }