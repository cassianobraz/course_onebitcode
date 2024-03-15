async function executar() {
  const postsList = document.getElementById("postsList");
  const resposta = await fetch("https://jsonplaceholder.typicode.com/posts");
  const dados = await resposta.json();
  console.log(dados);

  dados.forEach(function (post) {
    const postElement = document.createElement("article");

    const postTitle = document.createElement("h2");
    postTitle.textContent = post.title;

    const postAuthor = document.createElement("span");
    postAuthor.textContent = `Autor: ${post.userId}`;

    const postContent = document.createElement("p");
    postContent.textContent = post.body;

    postElement.append(
      postTitle,
      postAuthor,
      postContent,
      document.createElement("hr")
    );
    postsList.appendChild(postElement)
  });
}

executar();
