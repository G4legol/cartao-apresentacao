const curiosityButton = document.querySelector('#curiosityButton');
const curiosity = document.querySelector('#curiosity');

// O botão alterna a visibilidade da curiosidade, manipulando o DOM.
curiosityButton.addEventListener('click', () => {
  const isHidden = curiosity.hidden;
  curiosity.hidden = !isHidden;
  curiosityButton.innerHTML = isHidden
    ? 'Esconder curiosidade <span>↗</span>'
    : 'Descobrir uma curiosidade <span>↗</span>';
});
