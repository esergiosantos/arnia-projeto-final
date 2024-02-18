const meusDados = () => {
  window.location = "../html/meus-dados.html";
};

const minhasJoias = () => {
  window.location = "../html/minhas-joias.html";
};

const sair = () => {
  window.location = "../index.html";
};

const mostrarResgates = (dadosApi) => {
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
  const resposta = await fetch(
    "https://api-arnia-projeto-final.onrender.com/resgates"
  );
  console.log(resposta);
  const dados = await resposta.json();
  console.log(dados);

  mostrarResgates(dados);
};
carregarResgates();
