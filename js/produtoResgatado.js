// Seleciona o elemento HTML com a classe "produtoresgatado".
const conteudoResgatado = document.querySelector(".produtoresgatado");

// Variável para armazenar o ID do produto resgatado.
let id = null;

// Variável para armazenar os dados do produto resgatado.
let dados = null;

// Função para buscar o produto com base no ID passado como parâmetro na URL.
const getProdutos = async (id) => {
  // Faz uma requisição à API para obter o produto com o ID especificado.
  let resposta = await fetch(`http://localhost:3000/produtos?id=${id}`);

  // Converte a resposta da API para JSON.
  dados = await resposta.json();

  // Retorna apenas um único produto, pois estamos buscando por ID e não por um array de produtos.
  return dados[0];
};

// Função para redirecionar o usuário para a página inicial.
const voltarPágina = () => {
  // Redireciona o usuário para a página "home.html".
  window.location = `../html/home.html`;
};

// Função para mostrar os dados do produto resgatado na tela.
const mostrarProdutos = (produtos) => {
  // Insere o HTML com as informações do produto no elemento "conteudoResgatado".
  conteudoResgatado.innerHTML += `
    
    <div class="informacoes-produto">
      <p class="resgatado">Produto resgatado com sucesso!</p>
      <div class="conteudo-produto">
        <div>
          <img class="imagem-produto" src="${produtos.imagem}" alt="">
        </div> 
        <div>
          <h2 class="nome-produto">${produtos.nome}</h2>
          <span class="valor-produto"> Por: <b>${produtos.preco}</b> <i class="fa-regular fa-gem"></i></span>
        </div>
      </div>
      <div>
        <p class="texto-retirada">Parabéns por resgatar seu produto! Você pode retirá-lo em nossa loja física localizada no endereço:

        <br><br>

        Avenida do Contorno, 2905
        Santa Efigênia
        Belo Horizonte

        <br><br>

        Estamos ansiosos para recebê-lo e proporcionar uma experiência incrível ao retirar o seu produto. Agradecemos por fazer parte do nosso programa de fidelidade. Qualquer dúvida, entre em contato conosco. Até breve!
        </p>
        <span class="saldo-total"><span>Meu saldo:</span> 4 <i class="fa-regular fa-gem"></i></span>
        
      </div>
      <button class="voltarInicial" onclick="voltarPágina()">Voltar à página inicial</button>
    </div>
    
  `;
};

// Função para carregar o produto resgatado na tela.
const carregarSelecionado = async () => {
  // Obtém os parâmetros da URL da página.
  const parametros = window.location.search;

  // Mostra os parâmetros no console para fins de depuração.
  console.log(parametros);

  // Converte os parâmetros em um objeto JavaScript.
  const objetoParametros = new URLSearchParams(parametros);

  // Mostra o objeto de parâmetros no console para fins de depuração.
  console.log(objetoParametros);

  // Obtém o ID do produto do objeto de parâmetros.
  id = objetoParametros.get("id");

  // Mostra o ID do produto no console para fins de depuração.
  console.log(id);

  // Busca os dados do produto com base no ID.
  const produtos = await getProdutos(id);

  // Mostra os dados do produto na tela.
  mostrarProdutos(produtos);
};

// Chama a função para carregar o produto resgatado na tela.
carregarSelecionado();
