/* 1- Crie uma função construtora que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). */
/* 2- Na função construtora crie o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, 
que simplesmente aumenta o número de faltas em 1. Crie alguns alunos para testar a sua função construtora.  */

function Alunos(nome, qtdeFaltas, notas){
    this.nome = nome;
    this.qtdeFaltas = qtdeFaltas;
    this.notas = notas;        
    this.calcularMedia = function () {       
        let sum = 0;
        for(let i = 0; i < this.notas.length; i++) {
            sum += this.notas[i]; // [i] a posição do array é a msma da do contador.            
        }
        return (sum / this.notas.length);
    }
    this.faltas = function (){
       let falta = 0;
        for(let i = 0; i < this.length; i++)  {
          let aluno = this.length[i];
                if(aluno.notas == 0){
                    falta + 1;            
                }
        return (aluno.qtdeFaltas + falta);
       }
    }
}

const Frodo = new Alunos('Frodo', 1,[8,0,8]);
const Sauron = new Alunos('Sauron', 6,[10,10,10]);

let Curso = {
   nome: 'Rumo ao núcleo de Mordor',
   aprovacao: 7,
   faltasMax: 5,
   listaAlunos: [Frodo,Sauron],
    addAluno(nome, qtdeFaltas, notas) {
        let novoAluno = new Alunos(nome,qtdeFaltas,notas);
        this.listaAlunos.push(novoAluno);
   },
    status(aluno) {
        const criterio = (this.aprovacao * 0.1);
        for(let i = 0; i < this.listaAlunos.length; i++){  
            aluno = this.listaAlunos[i];  
                if((aluno.calcularMedia() >= this.aprovacao) && (aluno.qtdeFaltas < this.faltasMax)){
                    console.log('Aprovado nota e presença! ' + aluno.nome  + aluno.qtdeFaltas);
            }
                else if (aluno.calcularMedia() > (criterio) && (aluno.qtdeFaltas == this.faltasMax)){
                    console.log('Aprovado no criterio! ' + aluno.nome  + ('Faltas: ' + aluno.qtdeFaltas));
            }
                else if((aluno.calcularMedia() < this.aprovacao) || (aluno.qtdeFaltas > this.faltasMax)){
                    console.log('Reprovado por nota ou falta! ' + aluno.nome  + ('Faltas: ' + aluno.qtdeFaltas));
            }
        }
    },
    statusFinal(status){
        for(let i = 0; i <this.listaAlunos.length; i++){
            status = this.listaAlunos[i];
                if(status.aprovacao > this.aprovacao){
                    return true;
            } 
                else if(status.aprovacao < this.aprovacao){
                    return false;
            }
        }
    }
}

Curso.addAluno('Legolas ',0,[9,7,10]);
Curso.addAluno('Bilbo ', 2,[1,3,5]);
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
