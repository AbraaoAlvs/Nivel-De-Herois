javascript
// Defina uma função para o classificador
function classificarHeroi(poder, habilidade, coragem) {
    // Atribua pontuações com base nas características do herói
    let pontuacaoTotal = poder + habilidade + coragem;

    // Determine o nível com base na pontuação total
    if (pontuacaoTotal >= 25) {
        return "Herói de Nível Máximo";
    } else if (pontuacaoTotal >= 15) {
        return "Herói de Nível Médio";
    } else {
        return "Herói de Nível Iniciante";
    }
}

// Exemplo de uso do classificador
let poderHeroi = 8;
let habilidadeHeroi = 7;
let coragemHeroi = 6;

let nivelHeroi = classificarHeroi(poderHeroi, habilidadeHeroi, coragemHeroi);

console.log(`O herói é classificado como: ${nivelHeroi}`);
