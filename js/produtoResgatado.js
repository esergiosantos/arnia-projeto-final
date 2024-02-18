const conteudoResgatado = document.querySelector(".produtoresgatado");

let id = null;
let dados = null;

const getProdutos = async (id) => {
  let resposta =
    await fetch(`https://api-arnia-projeto-final.onrender.com/produtos?id=
    ${id}`); //Busca o produto com base no ID passado como parâmetro na URL
  dados = await resposta.json(); //Transforma a resposta
  return dados[0]; //Retorna apenas um único produto, pois estamos buscando por ID e não por array de produtos
};

const voltarPágina = () => {
  window.location = `../html/home.html`;
};

const mostrarProdutos = (produtos) => {
  conteudoResgatado.innerHTML += `
    
    <div class=informacoes-produto>
        <p class='resgatado'>Produto resgatado com sucesso!</p>
        <div class=conteudo-produto>
            <div>
                <img class='imagem-produto' src="${produtos.imagem}" alt="">
            </div>   
            <div>
                <h2 class='nome-produto'>${produtos.nome}</h2>
                <span class='valor-produto'> Por: <b>${produtos.preco}</b> <i class="fa-regular fa-gem"></i></span>
            </div>
        </div>
        <div>
            <p class='texto-retirada'>Parabéns por resgatar seu produto! Você pode retirá-lo em nossa loja física localizada no endereço:
            <br><br>
            Avenida do Contorno, 2905<br>
            Santa Efigênia<br>
            Belo Horiuzonte
            <br><br>Estamos ansiosos para recebê-lo e proporcionar uma experiência incrível ao retirar o seu produto. Agradecemos por fazer parte do nosso programa de fidelidade. Qualquer dúvida, entre em contato conosco. Até breve!</p>
            <span class='saldo-total'><span>Meu saldo:</span> 4 <i class="fa-regular fa-gem"></i></span>
            
        </div>
        <button class='voltarInicial' onclick="voltarPágina()">Voltar à página inicial</button>
    </div>
    `;
};

const carregarSelecionado = async () => {
  const parametros = window.location.search;
  console.log(parametros);
  const objetoParametros = new URLSearchParams(parametros);
  console.log(objetoParametros);
  id = objetoParametros.get("id");
  console.log(id);

  const produtos = await getProdutos(id);
  mostrarProdutos(produtos);
};
carregarSelecionado();
