var num1 = document.querySelector('#num1'); //tipo html
var num2 = document.querySelector('#num2');
var btn = document.querySelector('btn-somar');
var nome;
nome = "Priscila";
btn.addEventListener('click', function (event) {
    event.preventDefault(); //não submeter o formulário (recarregar a página)
    console.log(num1.value + num2.value);
});
