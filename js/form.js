function Enviar() {

    var nome = document.getElementById("nomeid");
    var email = document.getElementById("emailid");
    var mensagem = document.getElementById("mensagemid");

    if (nome.value != "" && email.value!="" && mensagem.value!="") {
        alert('Obrigado sr(a) "' + nome.value + '" sua mensagem foi enviada e sera respondida pelo e-mail: ' + email.value);
    }

}s