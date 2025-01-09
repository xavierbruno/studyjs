// Quando o usuário clicar nos links internos do site, 
// adicione a classe ativo ao item clicado e remova dos 
// demais itens caso eles possuam a mesma. Previna 
// o comportamento padrão desses links 
 
const img = document.querySelector('img');
// elemento.addEventListener(event, callback, options)
// img.addEventListener('click', function() {
//     console.log('clicou');
// });


const animaisLista = document.querySelector('.animais-lista'); 
 
function executarCallback(event) { 
  const currentTarget = event.currentTarget; // this 
  const target = event.target; // onde o clique ocorreu 
  const type = event.type; // tipo de evento 
  const path = event.path; 
  console.log(currentTarget, target, type, path); 
} 
 
animaisLista.addEventListener('click', executarCallback); 

function handleKeyboard(event){
    // console.log(event.key);
    
    if(event.key === 'a') {
        document.body.classList.toggle('azul');
    }
    else if(event.key === 's') {
        document.body.classList.toggle('vermelho');
    }
}
window.addEventListener('keydown', handleKeyboard);
 
// Selecione todos os elementos do site começando a partir do body, 
// ao clique mostre exatamente quais elementos estão sendo clicados 
 
 
// Utilizando o código anterior, ao invés de mostrar no console, 
// remova o elemento que está sendo clicado, o método remove() remove um elemento 
 
 
// Se o usuário clicar na tecla (t), aumente todo o texto do site. 