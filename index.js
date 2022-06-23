
function Alunos(nome, qtdeFaltas, notas){
    this.nome = nome;
    this.qtdeFaltas = qtdeFaltas;
    this.notas = notas;    
    
    this.mediaNotas = function(notas) {       
        let sum = 0;
        for(let i = 0; i < this.notas.length; i++) {
            sum += this.notas[i]; // [i] a posição do array é a msma da do contador.
        }
        return (sum / this.notas.length);
    }
}

let Curso = {
   nome: String,
   aprovacao: Number,
   faltasMax: Number,
   listaAlunos: Array,
}

const aluno1 = new Alunos('Harry Potter', 1,[5,5,5]);
const aluno2 = new Alunos('Hermione Granger', 0,[10,9,9]);
const aluno3 = new Alunos('Ronald Weasley', 3,[5,9,3]);

console.log(aluno1.mediaNotas());
console.log(aluno2.mediaNotas());
console.log(aluno3.notas);


