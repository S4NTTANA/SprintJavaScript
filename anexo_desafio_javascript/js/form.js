//class contato
class contato {
    // Ajustado o construtor exatamente com a estrutura que aparece nas suas anotações
    constructor(nome, sobrenome, email, cpf, telefone, contato) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.cpf = cpf;
        this.telefone = telefone;
        this.contato = contato;
    }
}

function Post(form) {
    // Captura os dados diretamente pelos nomes dos elementos do formulário
    let data = new contato(
        form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value
    );
    
    console.log("Dados capturados com sucesso:", data);
}

function Enviar() {
    var nome = document.getElementById("nomeid");
    
    if (nome && nome.value !== "") {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso!');
    }
}

// Efeito visual no botão Enviar (Passo 9 do PDF)
document.addEventListener("DOMContentLoaded", function() {
    let botaoEnviar = document.querySelector("input[type='submit']") || document.querySelector(".btn");

    if (botaoEnviar) {
        botaoEnviar.style.transition = "all 0.3s ease";

        botaoEnviar.addEventListener("mouseover", function() {
            botaoEnviar.style.transform = "scale(1.08)";
            botaoEnviar.style.backgroundColor = "#0056b3";
            botaoEnviar.style.cursor = "pointer";
        });

        botaoEnviar.addEventListener("mouseout", function() {
            botaoEnviar.style.transform = "scale(1)";
            botaoEnviar.style.backgroundColor = "";
        });
    }

    let formulario = document.querySelector("form");
    if (formulario) {
        formulario.addEventListener("submit", function(event) {
            Post(this);
        });
    }
});