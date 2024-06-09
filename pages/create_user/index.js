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
        error: function(response){
            let text = response.responseText;
            if(text.includes('Duplicate entry')){
                alert('Já existe um usuário com esse e-mail');
            } else {
                alert('Não foi possível criar o usuário');
            }
        }
    });
}

function validateForm(){
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let pass = document.getElementById('pass').value;

    if(name.length == 0){
        return 'Preencha um nome';
    } else if(email.lenght == 0){
        return 'Preencha seu e-mail';
    } else if(pass.length == 0){
        return 'Preencha sua senha';
    }
    return null;
}

window.onload = function(){
    document.getElementById('save-button').onclick = function() {
        let textForm = validateForm();

        if(textForm != null){
            alert(textForm);
        } else {
            createUser();;
        }
        
    }
};
  
