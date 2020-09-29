      var form = document.getElementById('form-envia');
      var campoNome = document.getElementById('nome');
      var campoTelefone = document.getElementById('telefone');
      var campoBatismo = document.getElementById('registro');
      var campoPais = document.getElementById('pais');
      var campoEndereco = document.getElementById('endereco');
      var campoCongregacao = document.getElementById('congregacao');
      var campoNacionalidade = document.getElementById('nacionalidade');
      var campoLugarDeBatismo = document.getElementById('lugar');
      var campoPai = document.getElementById('pai');
      var campoMae = document.getElementById('mae');
      var campoEstadoCivil = document.getElementById('estadocivil');
      var campoCargo = document.getElementById('cargo');
      var campoEmail = document.getElementById('email');
      var campoLider1 = document.getElementById('lider1');
      var campoNasc = document.getElementById('nascimento'); 

      var campoConfirmacao = document.getElementById('confirmacao1');
       
      var campoObservacao = document.getElementById('observacao');
     
     
       
function uploadFileToServer()
{
  var file = event.srcElement.files[0];
   var reader = new FileReader();
   reader.readAsBinaryString(file);
   reader.onload = function () {
       var dataUri = "data:" + file.type + ";base64," + btoa(reader.result);
       

       Email.send({
            SecureToken : "token here",
            To : 'Email here',
            From : "Email here",
            Subject : "Cateirinha Membro",
           Body : "Sending file:  " + file.name + "    Nome :  "+ campoNome.value +"  ,Telefone :"+ campoTelefone.value +
            " ,Batismo :"+ campoBatismo.value +"  ,Pais :"+ campoPais.value  +
             " , Congragação : " + campoCongregacao.value +" ,Endereço :"+ campoEndereco.value  +
             "  ,Nacionalidade :"+ campoNacionalidade.value + "  ,Lugar Batismo. :"+ campoLugarDeBatismo.value +
             "  ,Pai :"+ campoPai.value +"  ,Mãe :"+ campoMae.value+"  ,Estado Civil. :"+ campoEstadoCivil.value +
             "  ,Cargo :"+ campoCargo.value +"  ,Email :"+ campoEmail.value + "  ,Lider :"+ campoLider1.value + "  , Nascimento:  " + campoNasc.value +
             ",Requisitos? :"+ campoConfirmacao.value + " , Observação : " + campoObservacao.value ,
             
           Attachments : [
          	{
          		name : file.name,
          		data : dataUri
          	}]
       }).then(
         message => alert(message + "  Enviado com sucesso!!")
       );
   };
   reader.onerror = function() {
       console.log('there are some problems');
   };
}