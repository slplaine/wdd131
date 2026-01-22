// Referências aos elementos principais
const input = document.querySelector('#favchap');
const button = document.querySelector('#button');
const list = document.querySelector('#list');

// Evento de clique no botão
button.addEventListener('click', function() {
  // Verifica se o campo não está vazio
  if (input.value.trim() !== '') {
    // Cria o item da lista
    const li = document.createElement('li');
    const deleteButton = document.createElement('button');

    // Define o texto do item e do botão
    li.textContent = input.value;
    deleteButton.textContent = '❌';
    deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

    // Adiciona o botão dentro do li
    li.append(deleteButton);

    // Adiciona o li dentro da lista
    list.append(li);

    // Evento de clique no botão de deletar
    deleteButton.addEventListener('click', function() {
      list.removeChild(li);
      input.focus();
    });

    // Limpa o campo de entrada
    input.value = '';
  }

  // Sempre retorna o foco para o input
  input.focus();
});
