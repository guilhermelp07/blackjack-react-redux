export const languages = [
    {
        profile: "Switch language",
        deal: "Deal",
        hit: "Hit",
        stand: "Stand",
        quit: "Quit",
        deckEmptyMsg: "Deck is empty, refresh for a new game.",
        dealerHand: "Dealer: ",
        dealerScore: "Dealer Score: ",
        playerHand: "Your Hand: ",
        playerScore: "Your Score: ",
        playing: "Playing",
    },
    {
        profile: "Trocar idioma",
        deal: "Negociar",
        hit: "Bater",
        stand: "Esperar",
        quit: "Desistir",
        deckEmptyMsg: "O deck está vazio, recarregue a página para iniciar um novo jogo.",
        dealerHand: "Negociador: ",
        dealerScore: "Pontuação do negociador: ",
        playerHand: "Sua mão: ",
        playerScore: "Sua pontuação: ",
        playing: "Jogando",
    }
];

var index = 0;

export const getIndex = () => {
    return index;
}

export const switchLanguage = () => {
    index = index === 0 ? 1 : 0;
}