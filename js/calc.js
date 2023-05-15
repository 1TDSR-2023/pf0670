function insereNumeroNoVisor(botao,visor) {
    visor.value += botao.value 
    
}
const calculoDoVisor = (visor)=>{
    visor.value = eval(visor.value);
}
function dellResultado() {
    resultField.value = '';
  }

function insereNumeroNoVisor (botao,visor){
    if(botao.value == "+" || botao.value == "-" || botao.value == "*" || botao.value == "/" ){

        if(visor.value[visor.value.lenght-1] == "+" || visor.value[visor.value.lenght-1] == "-" || visor.value[visor.value.lenght-1] == "*" || visor.value [visor.value.lenght-1] == "/"){
            visor.value.slice(visor.value.lenght-1)
        }else{ 
            visor.value += botao.value      
        }

    }else{
        visor.value += botao.value
    }

}
