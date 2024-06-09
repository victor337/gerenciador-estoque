async function createUser(){

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;


    await $.ajax({
        url: 'create_user.php',
        method: 'POST',
        dataType: 'json',
        data: {
            name: name,
            email: email,
            pass: pass,
        },
        success: function(response){
            alert('Usuário criado com sucesso');
            window.location.href = '../login/index.html';
        },
        error: function(request, status, erro){
            alert('Não foi possível criar o usuário');
        }
    });
}

window.onload = function(){ 
    document.getElementById('save-button').onclick = function() {
        createUser();
    }
};
  
