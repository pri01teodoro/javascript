const num1 = document.querySelector('#num1') as HTMLInputElement //tipo html
const num2 = document.querySelector('#num2') as HTMLInputElement
const btn = document.querySelector('btn-somar')!

let nome: string
nome = "Priscila"

btn.addEventListener('click', function(event){
    event.preventDefault() //não submeter o formulário (recarregar a página)
    console.log(num1.value + num2.value)

})