//class contato
class contato {
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
    // Captura os dados de forma segura tratando possíveis erros de name no HTML
    let pegarValor = (nomeCampo) => {
        let campo = form.elements.namedItem(nomeCampo);
        return campo ? campo.value : "";
    };

    let data = new contato(
        pegarValor("nome"),
        pegarValor("sobrenome"),
        pegarValor("email"),
        pegarValor("cpf"),
        pegarValor("telefone"),
        pegarValor("contato")
    );
    
    console.log("Dados capturados com sucesso:", data);
}

function Enviar(form) {
    // CORREÇÃO: Busca primeiro pelo ID do seu HTML. Se não achar, tenta pelo name 'nome'
    var nomeCampo = document.getElementById("nomeid") || form.elements.namedItem("nome");
    
    if (nomeCampo && nomeCampo.value !== "") {
        alert('Obrigado sr(a) ' + nomeCampo.value + ' os seus dados foram encaminhados com sucesso!');
    } else {
        alert('Obrigado! Seus dados foram encaminhados com sucesso!');
    }
}

// Efeito visual no botão Enviar e gerenciamento do formulário
document.addEventListener("DOMContentLoaded", function() {
    let botaoEnviar = document.querySelector("input[type='submit']") || document.querySelector(".btn") || document.querySelector("form button");

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
            // CORREÇÃO 1: Evita que a página recarregue e suma com o console.log
            event.preventDefault(); 
            
            // Executa a captação na classe de contato
            Post(this);
            
            // CORREÇÃO 2: Dispara o alerta de sucesso passando o formulário atualizado
            Enviar(this);
            
            // Opcional: Limpa o formulário após o envio bem-sucedido
            this.reset();
        });
    }
});