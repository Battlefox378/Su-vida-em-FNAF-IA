const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você está investigando o restaurante Freddy Fazbear's durante a noite quando ouve um ruído estranho vindo da cozinha. À frente, uma porta entreaberta revela um corredor escuro; atrás de você, um antigo animatrônico parece se mover levemente.",
        alternativas: [
            {
                texto: "Escolha à frente",
                afirmacao: "Avançou pelo corredor escuro para investigar o que causou o barulho na cozinha mas não era nada."
            },
            {
                texto: "Escolha atrás",
                afirmacao: "Ignorou o animatrônico e continuou sua investigação em outra parte do restaurante."
            }
        ]
    },
    {
        enunciado: "Você encontra um antigo diário de manutenção nos escritórios do restaurante Freddy Fazbear's. O que você decide fazer?",
        alternativas: [
            {
                texto: "Escolha esquerda",
                afirmacao: "você pega o diario e começa a ler as anotações para descobrir incidentes passados envolvendo os animatrônicos."
            },
            {
                texto: "Escolha direita",
                afirmacao: "Continuou a explorar os escritórios em busca de uma saída sem se distrair com o diário."
            }
        ]
    },
    {
        enunciado: "Você está nos corredores escuros do restaurante Freddy Fazbear's quando se depara com duas portas: uma à esquerda e outra à direita. Qual delas você escolhe?",
        alternativas: [
            {
                texto: "Escolha a esquerda",
                afirmacao: "Tentou abrir a porta trancada para acessar uma área restrita do restaurante para explorar melhor o local."
            },
            {
                texto: "Escolha a direita",
                afirmacao: "Avançou pela porta entreaberta, arriscando-se a encontrar algum animatrônico ativo ou outra surpresa."
            }
        ]
    },
    {
        enunciado: "Você encontra um animatrônico aparentemente desativado em uma sala escura do restaurante Freddy Fazbear's. Como você decide proceder?",
        alternativas: [
            {
                texto: "Escolha superior",
                afirmacao: "Tentou reativar o animatrônico para investigar se ele tem alguma informação útil."
            },
            {
                texto: "Escolha inferior",
                afirmacao: "Deixou o animatrônico onde está e seguir adiante na busca por uma saída segura."
            }
        ]
    },
    {
        enunciado: "Você descobre uma chave enferrujada sobre uma mesa no restaurante Freddy Fazbear's. O que você decide fazer com ela?",
        alternativas: [
            {
                texto: "Escolha a esquerda",
                afirmacao: "Usou a chave para desbloquear uma das portas trancadas e explorar o que está do outro lado."
            },
            {
                texto: "Escolha a direita",
                afirmacao: "Deixou a chave onde está e continuou a explorar outras áreas do restaurante sem se preocupar com as portas trancadas."
            }
        ]
    },
];




let atual = 0;
let perguntaAtual;
let historiaFinal = "";


function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}


function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}


function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}


function mostraResultado() {
    caixaPerguntas.textContent = "Apos suas decisões de caminho você...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}


mostraPergunta();