function Enviar() {

    var nome = form.nome.value;
    var email = form.email.value;
    var mensagem = form.mensagem.value;
    if(form.nome.value=="" && form.email.value==""){
        alert("Por favor, preencha um nome e um email válido.");
        form.email.focus();
        form.nome.focus();
        return false;
    }
    else if(form.nome.value==""){
        alert("Por favor, preencha um nome válido.");
        form.nome.focus();
        return false;
    }
     else if (email.indexOf("@") == -1 || email.indexOf(".") == -1){
        alert("Por favor, preencha um e-mail válido.");
        form.email.focus();
        return false;
    }
    else if(form.mensagem.value==""){
        alert("Por favor, preencha uma mensagem.");
        form.mensagem.focus();
        return false;
    }
    else if (nome.value != "" && mensagem.value!="") {
        alert('Obrigado sr(a) "' + form.nome.value + '" sua mensagem foi enviada e sera respondida pelo e-mail: ' + form.email.value);
    }

}