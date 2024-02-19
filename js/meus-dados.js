const meusResgates = () => {
  // Redireciona o usuário para a página "meus-resgates.html".
  window.location = "../html/meus-resgates.html";
};

const minhasJoias = () => {
  // Redireciona o usuário para a página "minhas-joias.html".
  window.location = "../html/minhas-joias.html";
};

const sair = () => {
  // Redireciona o usuário para a página "index.html".
  window.location = "../index.html";
};

const mostrarDados = (resposta) => {
  // Exibe o nome e o email do usuário na tela.
  document.querySelector("#nome").value = resposta[0].nome;
  document.querySelector("#email").value = resposta[0].email;
};

const carregarDados = async () => {
  // Busca os dados do usuário da API.
  const dados = await fetch("http://localhost:3000/usuarios");
  console.log(dados);
  const resposta = await dados.json();
  console.log(resposta);

  // Exibe os dados do usuário na tela.
  mostrarDados(resposta);
};

// Chama a função "carregarDados" para iniciar o processo.
carregarDados();
