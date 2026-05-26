//carousel

//Array storage class
let carouselArr = [];

//class Carousel
class Carousel {

     constructor(imagem, titulo, url) {
        this.imagem = imagem;
        this.titulo = titulo;
        this.url = url;
    }

    static Start(arr){
        if(arr){
            
            if(arr.length > 0){
                Carousel._sequence = 0;
                Carousel._size = arr.length;
                Carousel.Next(); //start
            
                Carousel._interval = setInterval(function(){ Carousel.Next(); }, 2000);
                const btnvoltar = document.querySelector(".voltar");
                const btnavancar = document.querySelector(".avancar");

                btnvoltar.addEventListener("click", Carousel.Voltar);
                btnavancar.addEventListener("click", Carousel.Avancar);
            }
            
        } else {
            throw "Method Start need a Array Variable.";
        }
    }
    
    static Next(){
        let itemAtual = carouselArr[Carousel._sequence];
        let elementoImagem = document.getElementById("carousel");
        let elementoTitulo = document.getElementById("carousel-title");

        if (elementoImagem) {
            elementoImagem.style.backgroundImage = `url('img/${itemAtual.imagem}')`;
        }

        if (elementoTitulo) {
            elementoTitulo.innerHTML = `<a href="${itemAtual.url}">${itemAtual.titulo}</a>`;
        }

  
        Carousel._sequence++;

        if (Carousel._sequence > Carousel._size-1) {
            Carousel._sequence = 0;
        }
    }

    static Voltar() {
       
        Carousel._sequence--;
        
        if (Carousel._sequence < 0) {
            Carousel._sequence = Carousel._size - 1;
        }
        
        Carousel.Next();
    }

    static Avancar() {
        
        Carousel.Next();
    }
};

// carouselArr = [
//     { imagem: "img/imagem_1.jpg", titulo: "Conheça a Nova Ranger 2022", url: "lancamento.html" },
//     { imagem: "img/imagem_2.jpg", titulo: "Descubra o Territory", url: "lancamento.html" },
//     { imagem: "img/imagem_3.jpg", titulo: "Performance com o Bronco Sport", url: "lancamento.html" }
// ];
