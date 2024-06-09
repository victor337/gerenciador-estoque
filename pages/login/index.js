function validateForm() {
    let emailField = document.getElementById('email');
    let email = emailField.value;
    let expectedvalue = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!expectedvalue.test(email)) {
        alert("Por favor, insira um e-mail válido.");
        return false;
    }

    let passField = document.getElementById('pass').value;

    if(passField.length == 0){
      alert("Por favor, insira uma senha");
        return false;
    }

    return true;
}


function login(){
    let email = document.getElementById("email").value;
    let pass = document.getElementById("pass").value;
    
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
            window.location.href = "../list_products/index.html";
          }
        },
        error: function(request, status, error){
          console.log(request);
          console.log(status);
          console.log(error);
        },
      });

}


window.onload = function(){ 
  document.getElementById('create-user').onclick = function() {
    window.location.href = '../create_user/index.html';
  }

  document.getElementById('login-button').onclick = function() {
    if(validateForm()){
      login();
    }
  }
};