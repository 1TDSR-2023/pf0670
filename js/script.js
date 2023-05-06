
// var nome = "Ruan";
// let nome2 = "Borís";

// //Regra 1 : INICIALIZAR NA DECLARAÇÃO;
// //Regra 2 : NÃO ALTERAR O SEU VALOR DURANTE O FLUXO DO PROGRAMA;
// const PI = 3.14;

// var nome1 = "Petroni";

// if(nome1 != ""){
//     let nome1 = "Geovana";
// }

// console.log(nome1);
/* <button id="meu-btn">CLICK</button> */

//let botao = document.getElementById("meu-btn");
// console.log(botao.textContent);

//botao.addEventListener("click", function(){ 
    // console.log(this.textContent);
    //Função matemática Math
    //randon = Retorna um número aleatório entre 0 e 1. Ex: 0.2282632765;
    //floor  = Ela arredonda um número para baixo.
    //ceil   = Ela arredonda um número para cima.
    //round  = Ela arredonda um número aleatóriamente.

    //let r=0,g=0,b=0;
    //r = Math.round(Math.random()*255);
    //g = Math.round(Math.random()*255);
    //b = Math.round(Math.random()*255);
    
    // this.setAttribute("style","background-color:rgb("+r+","+g+","+b+");");
    //this.setAttribute("style",`background-color:rgb(${r},${g},${b});`);

//});

//ESTUDAR
//querySelector
//querySelectorAll
//Array
//Estruturas de repetição

//declarar um Array 
//let frutas = ["Banana","maçã","pêssego","laranja","limão","melancia","kiwi"];
//Imprimindo o array
//console.log(frutas);
//console.table(frutas);
//console.log(frutas[0]);
//console.log(frutas[6]);

//Inseirir um item ao final do array com o metodo push(NomeDoItem);
//frutas.push("Manga");
//console.log(frutas);
//Inseirir um item ao inicio do array com o metodo unshift(NomeDoItem);
//frutas.unshift("pitaya");
//console.log(frutas);
//Inseirir um item ao final do array com o metodo pop();
//frutas.pop();
//console.log(frutas)
//Inseirir um item ao inicio do array com o metodo shift();
//frutas.shift();
//console.log(frutas);


//localizar um item no array utilizando o metodo indexOf(NomeDoItem);
//Obs: Este metodo retorna o indice do Item encontrado.
//let indice = frutas.indexOf("laranja");
//console.log(`O indice entrantrado foi: ${indice}`);
//console.log(`O item Buscado foi: ${frutas[indice]}`);

//Realizando uma remoção de item utilizando o metodo splice().
//O metodo splice() recebe dois parametros, O indice do item que sera removido e a quantidadede vezes que este mesmo indice sera removido. Ex splice(indice, 1);
//Dica: Utilize o metodo indexOf() para buscar o indice do item no array.
//let indice = frutas.indexOf("melancia");
//console.log(`O item encontrado indice antes da remoção foi : ${frutas[indice]}`);
//frutas.splice(indice,1);
//console.log(frutas);
//console.log(`O item encontrado indice depois da remoção foi : ${frutas[indice]}`);

// //Concatenação de Arrays
// let nr1 = [1,2,3,4,5];
// let nr2 = [6,7,8,9,10];
// console.log("Array 1 : " + nr1);
// console.log("Array 2 : " + nr2);

// //Concatenando os dois arrays em um novo array.
// let nr3 = [nr1,nr2];
// console.log("Array 3 :" + nr3);

// nr3.forEach( (nr)=>{
//     nr.forEach((n)=>{
//         console.log("Itens do Array 3 : " + n);
//     });
// } );

//Concatenação de Arrays
let nr1 = [1,2,3,4,5];
let nr2 = [6,7,8,9,10];
console.log("Array 1 : " + nr1);
console.log("Array 2 : " + nr2);

//Concatenando os dois arrays em um novo array com o operador spread
let nr3 = [...nr1,...nr2];
console.log("Array 3 :" + nr3);

nr3.forEach( (nr)=>{
        console.log("Itens do Array 3 : " + nr);
    });

