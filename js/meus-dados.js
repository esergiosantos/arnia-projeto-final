const meusResgates = () => {
  window.location = "../html/meus-resgates.html";
};

const minhasJoias = () => {
  window.location = "../html/minhas-joias.html";
};

const sair = () => {
  window.location = "../index.html";
};

const mostrarDados = (resposta) => {
  document.querySelector("#nome").value = resposta[0].nome;
  document.querySelector("#email").value = resposta[0].email;
};

const carregarDados = async () => {
  const dados = await fetch(
    "https://api-arnia-projeto-final.onrender.com/usuarios"
  );
  console.log(dados);
  const resposta = await dados.json();
  console.log(resposta);

  mostrarDados(resposta);
};
carregarDados();
