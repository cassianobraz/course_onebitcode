document.getElementById("adicionarJogo").addEventListener("click", function () {
  const jogo = prompt(
    "Insira o nome do jogo que voce deseja adicionar a lista:"
  );

  const liElement = document.createElement("li");
  liElement.innerText = jogo

  const ulElement = document.getElementById("listaDeJogos");

  ulElement.appendChild(liElement)



});
