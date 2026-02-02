const slides = document.querySelectorAll('.slide');
let indiceAtual = 0;

function mudarSlide() {
    // 1. Remove a classe 'active' da imagem que está aparecendo agora
    slides[indiceAtual].classList.remove('active');

    // 2. Calcula o próximo índice (0, 1, 2 e volta pro 0)
    indiceAtual = (indiceAtual + 1) % slides.length;

    // 3. Adiciona a classe 'active' na nova imagem
    slides[indiceAtual].classList.add('active');
}

// 4. Inicia o temporizador: 3000 milisegundos = 3 segundos
setInterval(mudarSlide, 3000);