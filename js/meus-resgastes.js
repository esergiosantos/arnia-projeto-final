const meusDados = () => {
  // Redireciona o usuário para a página "meus-dados.html".
  window.location = "../html/meus-dados.html";
};

const minhasJoias = () => {
  // Redireciona o usuário para a página "minhas-joias.html".
  window.location = "../html/minhas-joias.html";
};

const sair = () => {
  // Redireciona o usuário para a página "index.html".
  window.location = "../index.html";
};

const mostrarResgates = (dadosApi) => {
  // Exibe os resgates do usuário na tela.
  const resgate = document.querySelector(".resgates");

  dadosApi.forEach((resgatados) => {
    const data = resgatados.horario;
    const imagem = resgatados.imagem;
    const nome = resgatados.nome;
    const preco = resgatados.joias;

    resgate.innerHTML += `
      <div class="card">
        <div class='data'>
          <span>${data}</span>
        </div>
        <div class='informacoes'>
          <img src='${imagem}'>
          <h3>${nome}</h3>
          <span>${preco} jóias</span>
        </div>
      </div>
    `;
  });
};

const carregarResgates = async () => {
  // Busca os dados dos resgates do usuário da API.
  const resposta = await fetch(
    "https://api-arnia-projeto-final.onrender.com/resgates"
  );
  console.log(resposta);
  const dados = await resposta.json();
  console.log(dados);

  // Exibe os dados dos resgates na tela.
  mostrarResgates(dados);
};

// Chama a função "carregarResgates" para iniciar o processo.
carregarResgates();
