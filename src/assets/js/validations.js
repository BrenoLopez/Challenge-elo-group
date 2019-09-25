$(document).ready(function(){
    $("#telefone").mask("99 – 99999999"); 
    $("#nome").change(function(){
        const nome = $("#nome").val();
        const nomeSeparado = nome.split(' ');
        if(nomeSeparado.length < 2 ){
            $("#alert").html(` 
             <div class="alert alert-danger container text-center" role="alert">
                    Insira também seu sobrenome!
          </div>`
          );
          $(".btn-default").prop( "disabled", true );            
        }
        else{
            $("#alert").html(` 
            <div></div>`
         );
         $(".btn-default").prop( "disabled", false );
        }
    });
  
  });