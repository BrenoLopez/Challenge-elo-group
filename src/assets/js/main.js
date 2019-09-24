$(document).ready(function(){
    $("#customRadio1").click(function(){       
            $("#redes_sociais").html( 
                `<div class="checkbox-group">
                <div class="form-group row">
                <label for="">Quais:
                </label>
                </div>
                <div class="form-group row">
                <div class="custom-control custom-checkbox">
                    <input name="rede_social" type="checkbox" value="facebook" class="custom-control-input" id="customCheck1">
                    <label class="custom-control-label button-checkbox" for="customCheck1" >Facebook</label>
                </div>
                <div class="custom-control custom-checkbox">
                <input name="rede_social" type="checkbox" value="linkedIn" class="custom-control-input" id="customCheck2">
                <label class="custom-control-label button-checkbox" for="customCheck2">LinkedIn</label>
            </div>
            <div class="custom-control custom-checkbox">
                <input name="rede_social" type="checkbox" value="instagram" class="custom-control-input" id="customCheck3">
                <label class="custom-control-label button-checkbox" for="customCheck3">Instagram</label>
            </div>`);
        
    });
    $("#customRadio2").click(function(){
        $("#redes_sociais").html("<div></div>");
    });

   async function enviaForm(){
        // event.preventDefault();
        const dados = {
            nome: $("#nome").val(),
            telefone: $("#telefone").val(),
            cnc : $("#como_nos_conheceu").val(),
            confirmaRedesSociais: $("#confirmacao_redes_sociais").val(),
            redesSociais:[]
        }
        // const request  = await axios.post('http://localhost:8080',data);
        console.log($("#customCheck1").val());
    }
    enviaForm();
});


           