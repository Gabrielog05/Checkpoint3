/* Passo 1 - Crie uma função construtora que tenha como atributos: nome (string), quantidade de faltas (number) e notas (array de números). */
/* Passo 2 - Na função construtora crie o método calcularMedia que retorna a média de suas notas. Também terá um método chamado faltas, 
que simplesmente aumenta o número de faltas em 1. Crie alguns alunos para testar a sua função construtora.  */
/* Passo 3 - crie o objeto literal curso que tem como atributos: nome do curso (string), nota de aprovação (number), faltas máximas (number) 
                e uma lista de estudantes (um array composto pelos alunos criados no passo 2).*/
/* Passo 4 - Crie o método que permite adicionar alunos à lista do curso, ou seja, quando chamamos nosso método em nosso 
                                        objeto curso, deverá adicionar um aluno a mais na propriedade lista de estudantes do objeto curso. */
 /*Passo 5 - Crie um método para o objeto curso que receba um aluno (como parâmetro) e retorne true se ele aprovou no curso ou false em caso
                    de reprovação. Para ser aprovado, o aluno tem que ter uma média igual ou acima da nota de aprovação  e ter menos faltas que faltas 
                    máximas.Se tiver a mesma quantidade, tem que estar 10% acima da nota de aprovação.*/ 
/* Passo 6 - Crie um método para o objeto curso que percorra a lista de estudantes e retorne um array 
                        de booleanos com os resultados se os alunos aprovaram ou não.*/  

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
                if(aluno.notas == 0){ //considera que, se o aluno zerou a prova, acrescenta uma falta.
                    falta + 1;            
                }
        return (aluno.qtdeFaltas + falta);
       }
    }
}

const Frodo = new Alunos('Frodo', 1,[8,0,8]);
const Sauron = new Alunos('Sauron', 6,[10,10,10]);

                                                                         
let Curso = { 
   nome: 'Trekking to Mordor',
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
                    console.log('Aprovado nota e presença! ');
            }
                else if (aluno.calcularMedia() > (criterio) && (aluno.qtdeFaltas == this.faltasMax)){
                    console.log('Aprovado no criterio! ');
            }
                else if((aluno.calcularMedia() < this.aprovacao) || (aluno.qtdeFaltas > this.faltasMax)){
                    console.log('Reprovado por nota ou falta! ');
            }
        } return aluno.aprovacao;
    },
    statusBoolean(){ 
        let aluno = 0;
        for(let i = 0; i <this.listaAlunos.length; i++){
            aluno = this.listaAlunos[i];
                if(aluno.calcularMedia > this.aprovacao){
                    return true;
            } 
                else if(aluno.calcularMedia < this.aprovacao){
                    return false;
            }
        } return aluno.aprovacao;
    }
}

Curso.addAluno('Legolas ',0,[9,7,10]);
Curso.addAluno('Bilbo ', 2,[1,3,5]);
console.log(Curso(Frodo));



