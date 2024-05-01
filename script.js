document.addEventListener("DOMContentLoaded", function () {
  const projetos = [
    {
      titulo: "Soul Match",
      descricao: "Aplicativo de relacionameno desenvolvido especificamente para mobile, permitindo que pessoas possam se conhecer de maneira fácil e simples, com uma interface amigavel e intuitiva permitindo facilidade para os usuarios.",
      imagem: "https://img.freepik.com/vetores-gratis/conceito-de-interface-de-aplicativo-de-namoro_23-2148515107.jpg",
     
    },
    {
      titulo: "Play Fit",
      descricao: "Projeto que cria fichas para treinos na academia, facilitando o trabalho dos instrutores e eliminando fichas de papel dentro das academias.",
      imagem: "https://mir-s3-cdn-cf.behance.net/projects/404/244b61138711385.Y3JvcCwxNjM3LDEyODAsMTUxNSwzNDg.png",
    },
    {
      titulo: "Watch Flix",
      descricao: "aplicativo de streaming desenvolvido também para mobile, promovendo versatilidade para poder assistir series e filmes.",
      imagem: "https://miro.medium.com/v2/resize:fit:1200/1*O_-uL27_FI-jbspIUoIZDg.png",
    }
  ];

  const listaProjetos = document.getElementById("portfolio");
  const conteudoExibido = document.getElementById("conteudo-exibido");
  
  

  projetos.forEach((projeto) => {
    const button = document.createElement("button");
    button.textContent = projeto.titulo;

    button.addEventListener("click", function () {
      const tituloProjeto = document.createElement("h4");
      tituloProjeto.textContent = projeto.titulo;

      const imagemProjeto = document.createElement("img");
      imagemProjeto.setAttribute("src", projeto.imagem);

      const descricaoProjeto = document.createElement("p2");
      descricaoProjeto.textContent = projeto.descricao;







      conteudoExibido.innerHTML = ''; // Limpa o conteúdo anterior
      conteudoExibido.appendChild(tituloProjeto);
      conteudoExibido.appendChild(imagemProjeto);
      conteudoExibido.appendChild(descricaoProjeto);


      conteudoExibido.style.display = "block"; // Exibe a section
    });

    listaProjetos.appendChild(button);
  });

  // Adiciona um evento para ocultar a section ao clicar fora dela
  window.onclick = function (event) {
    if (event.target == conteudoExibido) {
      conteudoExibido.style.display = "none";
    }
  };
});