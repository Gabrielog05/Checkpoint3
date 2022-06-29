/* 1- Crie uma função construtora que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). */
/* 2- Na função construtora crie o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, 
que simplesmente aumenta o número de faltas em 1. Crie alguns alunos para testar a sua função construtora.  */

function Alunos(nome, qtdeFaltas, notas){
    this.nome = nome;
    this.qtdeFaltas = qtdeFaltas;
    this.notas = notas;    
    
    this.calcularMedia = function (notas) {       
        let sum = 0;
        for(let i = 0; i < this.notas.length; i++) {
            sum += this.notas[i]; // [i] a posição do array é a msma da do contador.            
        }
        return (sum / this.notas.length);
    }
}

const Frodo = new Alunos('Frodo', 1,[5,6,7]);
const Sauron = new Alunos('Sauron', 0,[10,9,9]);
const Gandalf = new Alunos('Gandalf', 3,[10,10,10]);

let Curso = {
   nome: 'Rumo ao núcleo de Mordor',
   aprovacao: 7,
   faltasMax: 5,
   listaAlunos: [Frodo,Sauron,Gandalf],
    addAluno(nome, qtdeFaltas, notas) {
        let novoAluno = new Alunos(nome,qtdeFaltas,notas);
        this.listaAlunos.push(novoAluno);
   },
    status(aluno) {
        for(let i = 0; i < this.listaAlunos.notas; i++){  
                 aluno = this.listaAlunos[i];  
                 console.log(aluno);
                // if (aluno.calcularMedia() < this.aprovacao){
                //     console.log('Reprovado!')
                // }
                // else if(aluno.calcularMedia() >= this.aprovacao) {
                //     console.log('Aprovado');
                // }
                
            }
        }
    }

Curso.addAluno('Legolas',3,[9,7,10]);
console.log(Curso.status());











// resultadoDosAlunos() {
//     for (let i = 0; i < this.listaAlunos.length; i++) {
//       const alunoCurso = this.listaAlunos[i];
//       let media = alunoCurso.media;
//       let media10 = this.notaAprovacao + this.notaAprovacao * 0.1;
//       let faltas = alunoCurso.qtfaltas;
//       let aprovado = [
//         (media >= this.notaAprovacao && faltas < this.faltasMaximas) ||
//         (faltas >= this.faltasMaximas && media >= media10)
//           ? true
//           : false,
//       ];
//       let resultado = []
//       resultado.push(aprovado)
      
//       return resultado
      
//     }
//   },
// };
