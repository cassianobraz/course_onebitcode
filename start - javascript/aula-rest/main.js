async function executar() {
  const dados = await fetch("http://localhost:3000/tarefas").then((resposta) =>
    resposta.json()
  );
  console.log(dados);
}

executar();
