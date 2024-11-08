const button = document.getElementById('myButton');

const body = document.querySelector('body');

const divParagraph = document.createElement('div');

body.appendChild(divParagraph);

const paragraph = `<p>Bonjour, vous avez cliqué sur le bouton !</p>`;

button.addEventListener('click', () => {
  console.log('click');
  divParagraph.innerHTML += paragraph;
});
