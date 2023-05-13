function insereNumeroNoVisor(botao,visor) {
    visor.value += botao.value 
    
}
const calculoDoVisor = (visor)=>{
    visor.value = eval(visor.value);
}

// Desafio 3
// Impeça a entrada de mais de uma vez do operador matematico