document.getElementById('gato-btn').addEventListener('click', function() {
    const gatoImagem = document.createElement('img');
    gatoImagem.src = 'URL_DA_IMAGEM_DO_GATO'; // Substitua pelo URL da imagem de um gato
    gatoImagem.alt = 'Um gato fofo';
    document.getElementById('gato-imagem').appendChild(gatoImagem);
});
