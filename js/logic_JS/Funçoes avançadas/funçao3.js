// Funçao construrora -> objetos
// Função fabrica -> objetos
// contrutora inicia com letra maiuscula -> Pessoa(new )
function Pessoa(nome, sobrenome){
    this.nome = nome;
    this.sobrenome = sobrenome;

    this.metodo = function (){
        console.log(this.name + ' sou um metodo');
    };
}

const p1 = new Pessoa('dash','K');
const p2 = new Pessoa('loren','Ichi')
p2.metodo();
console.log(p1)


//funçao recursiva

function recursiva(max){
    if (max >=10) return;
    max ++;
    console.log(max);
    recursiva(max);
}

recursiva(0);

//funçao geradora

 function* gerador(){
     yield function(){
         console.log('vim do y1');
     };

     //...

     yield function(){
         console.log('vim do y2');
     };
 }

 const ge = gerador();
 const func1 = ge.next().value;
 const func2 = ge.next().value;

 func1();
 func2();