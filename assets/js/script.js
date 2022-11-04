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

let listaTarefas = []

function limparFormulario() {
    descricaoTarefa.value = ''
    dataTarefa.value = ''
}

const tarefasToLocalStorage = () => { //constante que aponta para uma função anônima (sem nome)
    localStorage.setItem("tarefas", JSON.stringify(listaTarefas))
}

const getTarefasFromLocalStorage = () => {
    listaTarefas = JSON.parse(localStorage.getItem("tarefas"))
}

const result = document.querySelector('#result')

const setResultToTable = () => { //mostrar os resultados (tarefa) na tabela 
    
    result.innerHTML = ''

    listaTarefas.forEach(tarefa => { // método que percorre cada item do array. ForEach recebe uma fução como parâmetro
        const linha = document.createElement('tr')

        const colunaDescricao = document.createElement('td')
        colunaDescricao.innerHTML = tarefa.descricao

        const colunaData = document.createElement('td')
        colunaData.innerHTML = tarefa.data
        
        linha.appendChild(colunaDescricao)
        linha.appendChild(colunaData)
        result.appendChild(linha)
    }) 
}

form.addEventListener('submit', (event) => { // escuta ação (passar o mouse, clicar), no caso do formulário é submeter. A função tem como parâmetro o evento  //função anônima
    event.preventDefault() //não recarrega a página ao clicar em adicionar (submeter)


const tarefa = { //objeto
    descricao: descricaoTarefa.value, 
    data: new Date (dataTarefa.value),
    realizado: false
}

listaTarefas.push(tarefa)
limparFormulario()
tarefasToLocalStorage()
getTarefasFromLocalStorage()
setResultToTable()
})

getTarefasFromLocalStorage()
setResultToTable()

/* const botaoImprimir = document.querySelector('#imprimir')
botaoImprimir.addEventListener('click', function (){ //hover, ao soltar o click, etc
    console.log('Clicou no botão!')
}) 

function imprimir() {
    console.log('Clicou no botão')   ou fazer assim
}
*/