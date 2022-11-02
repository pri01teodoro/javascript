/* const pessoa = {
    nome: "Priscila",
    idade: 19,
    aluno: true,
}

{} -> objeto

console.log(pessoa.idade),

pessoa.nome = "Maria" //os atributos do objeto mudam, não são constantes
console.log(pessoa.nome) */

/*

console.log(typeof(tarefas))
console.log(tarefas[0])
console.log(tarefas[0].descricao) */

/* let nome = "Priscila"

localStorage.setItem("nome", nome) //banco chave-valor

console.log(localStorage.getItem("nome")) */

// const tarefas = [
//     {id: 1, descricao: "Fazer compras"},
//     {id: 2, descricao: "Estudar para a prova"}
// ]

/* localStorage.setItem("tarefas", JSON.stringify(tarefas)) //transformar em string para inserir no localStorage

const tarefasDB = JSON.parse(localStorage.getItem("tarefas")) //transformar em objeto para mostrar o objeto em tal posição
console.log(tarefasDB[0]. descricao) */

const descricaoTarefa = document.querySelector('#tarefa') //passar o id do objeto

const form = document.querySelector('#form') //acessar a partir do id 

const dataTarefa = document.querySelector('#data')

const listaTarefas = []

function limparFormulario() {
    descricaoTarefa.value = ''
    dataTarefa.value = ''
}

form.addEventListener('submit', function(event){ // escuta ação (passar o mouse, clicar), no caso do formulário é submeter. A função tem como parâmetro o evento
    event.preventDefault() //não recarrega a página ao clicar em adicionar (submeter)


const tarefa = { //objeto
    descricao: descricaoTarefa.value, 
    data: dataTarefa.value,
    realizado: false
}

listaTarefas.push(tarefa)
limparFormulario()
})
/* const botaoImprimir = document.querySelector('#imprimir')
botaoImprimir.addEventListener('click', function (){ //hover, ao soltar o click, etc
    console.log('Clicou no botão!')
}) 

function imprimir() {
    console.log('Clicou no botão')   ou fazer assim
}
*/