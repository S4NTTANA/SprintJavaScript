//car
let carArr = [];

class Car {
    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){
        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
    }
}

// Procura a posição do carro no array
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome === carClass.nome) {
            return i;
        }
    }
    return -1;
}

// Adiciona ou remove o carro do array de comparação
function SetCarToCompare(el, carClass) {
    if(carClass instanceof Car){
        if(el.checked){
            let posicaoExistente = GetCarArrPosition(carArr, carClass);
            
            if (posicaoExistente === -1) {
                if(carArr.length >= 2) {
                    alert("Você só pode selecionar no máximo 2 veículos para comparação.");
                    el.checked = false; 
                    return;
                }
                carArr.push(carClass);
            }
        } else {
            let posicao = GetCarArrPosition(carArr, carClass);
            if(posicao !== -1) {
                carArr.splice(posicao, 1);
            }
        }
    } else {
        throw "You need set a Car Class";
    }
}

function ShowCompare(){
    if(carArr.length < 2) {
        alert("Por favor, selecione 2 carros para efetuar a comparação.");
        return;
    }
    
    UpdateCompareTable();
    
    // Tenta exibir achando pelo ID clássico ou pela classe da div
    let divCompare = document.getElementById("compare") || document.querySelector(".compare") || document.querySelector(".compare-container");
    if (divCompare) {
        divCompare.style.display = "block";
    }
}

function HideCompare(){
    let divCompare = document.getElementById("compare") || document.querySelector(".compare") || document.querySelector(".compare-container");
    if (divCompare) {
        divCompare.style.display = "none";
    }
}

function UpdateCompareTable(){
    if(carArr.length === 2) {
        let carro1 = carArr[0];
        let carro2 = carArr[1];

        // Função auxiliar interna para preencher os elementos sem dar erro caso o ID mude um pouco de nome
        let preencher = (idAlternativo1, idAlternativo2, valor) => {
            let el = document.getElementById(idAlternativo1) || document.getElementById(idAlternativo2);
            if(el) {
                if(el.tagName === "IMG") el.src = valor;
                else el.innerText = valor;
            }
        };

        // Preenche a coluna do Veículo 1 (Testa os dois formatos de ID do template da Ford)
        preencher("compare-name-1", "compare-1-name", carro1.nome);
        preencher("compare-price-1", "compare-1-price", carro1.preco);
        preencher("compare-altCacamba-1", "compare-1-altCacamba", carro1.alturaCacamba);
        preencher("compare-altVeiculo-1", "compare-1-altVeiculo", carro1.alturaVeiculo);
        preencher("compare-altSolo-1", "compare-1-altSolo", carro1.alturaSolo);
        preencher("compare-capCarga-1", "compare-1-capCarga", carro1.capacidadeCarga);
        preencher("compare-motor-1", "compare-1-motor", carro1.motor);
        preencher("compare-potencia-1", "compare-1-potencia", carro1.potencia);
        preencher("compare-volCacamba-1", "compare-1-volCacamba", carro1.volumeCacamba);
        preencher("compare-roda-1", "compare-1-roda", carro1.roda);
        preencher("compare-image-1", "compare-1-image", carro1.image);

        // Preenche a coluna do Veículo 2
        preencher("compare-name-2", "compare-2-name", carro2.nome);
        preencher("compare-price-2", "compare-2-price", carro2.preco);
        preencher("compare-altCacamba-2", "compare-2-altCacamba", carro2.alturaCacamba);
        preencher("compare-altVeiculo-2", "compare-2-altVeiculo", carro2.alturaVeiculo);
        preencher("compare-altSolo-2", "compare-2-altSolo", carro2.alturaSolo);
        preencher("compare-capCarga-2", "compare-2-capCarga", carro2.capacidadeCarga);
        preencher("compare-motor-2", "compare-2-motor", carro2.motor);
        preencher("compare-potencia-2", "compare-2-potencia", carro2.potencia);
        preencher("compare-volCacamba-2", "compare-2-volCacamba", carro2.volumeCacamba);
        preencher("compare-roda-2", "compare-2-roda", carro2.roda);
        preencher("compare-image-2", "compare-2-image", carro2.image);
    }
}

// Objetos com as strings batendo com os dados e imagens da pasta img do projeto
const ranger = new Car("Nova Ranger 2022", "R$ 222.790", "511 mm", "1815 mm", "232 mm", "1014 kg", "3.2 Duratorq", "200 cv", "1180 L", "Aro 18", "img/storm.jpg");
const territory = new Car("Territory", "R$ 215.000", "-", "1674 mm", "180 mm", "488 kg", "1.5 Turbo", "150 cv", "420 L", "Aro 18", "img/xls 2.2 diesel.jpg");
const bronco = new Car("Bronco Sport", "R$ 260.000", "-", "1813 mm", "223 mm", "441 kg", "2.0 EcoBoost", "253 cv", "580 L", "Aro 17", "img/XL Cabine.jpg");

// Inicialização segura salvando os gatilhos
document.addEventListener("DOMContentLoaded", function() {
    let botaoComparar = document.getElementById("btn-comparar") || document.querySelector(".btn-compare") || document.querySelector("button");
    if (botaoComparar) {
        botaoComparar.addEventListener("click", ShowCompare);
    }

    let botaoFechar = document.getElementById("close-compare") || document.querySelector(".close");
    if (botaoFechar) {
        botaoFechar.addEventListener("click", HideCompare);
    }
});