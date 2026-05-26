//carousel

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {

    static Start(arr){
        if(arr){
            
            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
                // Configurado para 2 segundos conforme o Passo 5 do PDF
                Carousel._interval = setInterval(function(){ Carousel.Next(); }, 2000);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }
    
    static Next(){
        if (Carousel._size === 0) return;

        let itemAtual = carouselArr[Carousel._sequence];
        let elementoImagem = document.getElementById("carousel");
        let elementoTitulo = document.getElementById("carousel-title");

        if (elementoImagem) {
            elementoImagem.style.backgroundImage = `url('${itemAtual.imagem}')`;
        }

        if (elementoTitulo) {
            // Link apenas no texto, conforme anotado em aula
            elementoTitulo.innerHTML = `<a href="${itemAtual.url}">${itemAtual.titulo}</a>`;
        }

        // --- CÓDIGO DO PROFESSOR MANIPULANDO O ÍNDICE ---
        Carousel._sequence++;

        if (Carousel._sequence >= Carousel._size) {
            Carousel._sequence = 0;
        }
    }

    // ADIÇÃO DAS ANOTAÇÕES: Funções para as setas controlarem manualmente
    static Voltar() {
        // Como o Next() avança 1 posição no final, para voltar de verdade precisamos recuar 2 posições
        Carousel._sequence -= 2;
        
        // Se o cálculo der negativo, faz a volta circular para o final do array de forma limpa
        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size + Carousel._sequence;
        }
        
        Carousel.Next();
    }

    static Avancar() {
        // O Next() já faz o papel de avançar e validar os limites conforme o padrão do professor
        Carousel.Next();
    }
};

// Populando o array com as imagens reais da pasta
carouselArr = [
    { imagem: "img/imagem_1.jpg", titulo: "Conheça a Nova Ranger 2022", url: "lancamento.html" },
    { imagem: "img/imagem_2.jpg", titulo: "Descubra o Territory", url: "lancamento.html" },
    { imagem: "img/imagem_3.jpg", titulo: "Performance com o Bronco Sport", url: "lancamento.html" }
];

// Dispara o carrossel e vincula as setas se existirem no HTML
document.addEventListener("DOMContentLoaded", function() {
    Carousel.Start(carouselArr);

    // Vincula os botões/setas caso existam no HTML (ex: ids 'seta-voltar' e 'seta-avancar')
    let btnVoltar = document.getElementById("seta-voltar") || document.querySelector(".carousel-control-prev");
    let btnAvancar = document.getElementById("seta-avancar") || document.querySelector(".carousel-control-next");

    if(btnVoltar) btnVoltar.addEventListener("click", Carousel.Voltar);
    if(btnAvancar) btnAvancar.addEventListener("click", Carousel.Avancar);
});