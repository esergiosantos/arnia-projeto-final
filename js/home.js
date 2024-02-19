const resgatarProduto = (id) => {
  window.location.href = `../html/produto.html?id=${id}`;
};

// Esta função recebe uma lista de produtos e os exibe na tela.
const mostrarDados = (produtos) => {
  // Seleciona o elemento HTML com a classe "produtosResgatar".
  const divProdutos = document.querySelector(".produtosResgatar");

  // Percorre cada produto na lista.
  produtos.forEach((produto) => {
    // Obtém as propriedades do produto: ID, nome, preço, descrição e imagem.
    const id = produto.id;
    const nome = produto.nome;
    const preco = produto.preco;
    const descricao = produto.descricao;
    const imagem = produto.imagem;

    // Cria o HTML para cada produto e o adiciona ao elemento "divProdutos".
    divProdutos.innerHTML += `
      <div>
        <img src="${imagem}">
        <h2>${nome}</h2>
        <span>${preco} jóias</span>
        <button class="resgatar" onclick="resgatarProduto('${id}')">Resgatar</button>
      </div>
    `;
  });
};

// Esta função carrega os dados dos produtos da API e os exibe na tela.
const carregarDados = async () => {
  // Faz uma requisição à API para obter os dados dos produtos.
  const dados = await fetch(
    "https://api-arnia-projeto-final.onrender.com/produtos"
  );

  // Converte a resposta da API para JSON.
  const produtos = await dados.json();

  // Exibe os dados dos produtos na tela.
  mostrarDados(produtos);
};

// Chama a função "carregarDados" para iniciar o processo.
carregarDados();
