function abrirWhatsapp() {
   var nome = document.getElementById("nome").value;
   var telefone = document.getElementById("telefone").value;
   var email = document.getElementById("email").value;
   var msg = document.getElementById("msg").value;
      // Número que receberá as informações
   var url = "https://wa.me/+XX (XX) XXXX-XXXX?text="
      // Mensagem personalizada
      + "*Formulário de Contato*" 
        // Quebra de linha
      + "%0a"
        // Quebra de linha
      + "%0a"
        // Dados de formulário
      + "*Nome*: " + nome + "%0a"
      + "*Telefone*: " + telefone + "%0a"
      + "*E-mail*: " + email + "%0a"
      + "*Mensagem*: " + msg;
      window.open(url, '_blank').focus();
}