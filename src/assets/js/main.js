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
                <input name="rede_social" type="checkbox" value="linkedin" class="custom-control-input" id="customCheck2">
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
    
        const array = new Array();
        const dados = {
            nome: "",
            telefone:"", 
            como_nos_conheceu: "",
            confirmacao_rede_social: 0,
            rede_social: []
        };
    
        $("#form").change(function(e){
            if(e.target.name === "rede_social"){           
                if(e.target.checked){                
                    array.push(e.target.value);              
                }
                else{
                const rede_social = e.target.value;
                const indice = array.indexOf(rede_social.toLowerCase());
                array.splice(indice);
                }   
                
            }   
            dados.rede_social = array;
            console.log(dados.rede_social);
            dados[e.target.name] = e.target.value;           
        });
       
        
    
    $("#form").submit(function(e){
        e.preventDefault();    
      axios.post('http://localhost:8080',dados);

    });
   
});
// formato a ser enviado
// {
//     nome: "oasdfoija",
//     telefone: "ciaushdfuia",
//     como_nos_conheceu: "TV".,
//     confirmacao_rede_social: 0,
//     rede_social: ["facebook", "linkedin","instagram"]
// }

           