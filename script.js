const itens = document.querySelectorAll('.item');

let index = 0;

function atualizar() {
    itens.forEach(item => item.classList.remove('active'));

    itens[index].classList.add('active');

    index++;

    if (index >= itens.length) {
        index = 0;
    }
}

atualizar(); // inicia já com primeira ativa
setInterval(atualizar, 2000);