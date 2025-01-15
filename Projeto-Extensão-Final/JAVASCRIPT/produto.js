const selectCategoria = document.getElementById('categoria');
const produtos = document.querySelectorAll('.produto-item');

selectCategoria.addEventListener('change', (event) => {
    const categoriaSelecionada = event.target.value;

    produtos.forEach(produto => {
        if (categoriaSelecionada === '' || produto.dataset.categoria === categoriaSelecionada) {
            produto.style.display = 'block'; // Exibe o produto
        } else {
            produto.style.display = 'none'; // Esconde o produto
        }
    });
});
const btnAnterior = document.querySelector('.carrossel-btn.anterior');
const btnProximo = document.querySelector('.carrossel-btn.proximo');
const produtosLista = document.querySelector('.produtos-lista');

let scrollAmount = 0;

btnAnterior.addEventListener('click', () => {
    scrollAmount -= 200;
    produtosLista.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
});

btnProximo.addEventListener('click', () => {
    scrollAmount += 200;
    produtosLista.scrollTo({
        top: 0,
        left: scrollAmount,
        behavior: 'smooth'
    });
});
