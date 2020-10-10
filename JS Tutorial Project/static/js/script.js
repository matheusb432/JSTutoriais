// Challenge 1: Age in days
// Função para calcular a idade em dias de uma pessoa com input do ano que nasceram.
function getAgeInDays()
{
    let year = parseInt(prompt("What year were you born... good friend?"));
    let age = 2020 - year;
    let leapYearDays = age/4;
    
    // Se a idade é divisível por 4, a idade pode ser calculado com 365.25, ja que existe uma quantidade previsível de anos bissextos.
    if( age % 4 === 0){
        ageInDays = age * 365.25;
    }
    else{
        // Math.trunc() apenas retorna a parte inteira de um numero decimal.
        ageInDays = (age * 365) + Math.trunc(leapYearDays);
    }
    // Criando um elemento h1 em JS com document.createElement('h1')
    let h1 = document.createElement('h1');
    let textAnswer;
    // Messagem para input invalido, obs; isNaN(x) permite o JS identificar caso o input do prompt ser NaN.
    if( year < 1900 || year > 2020 || isNaN(year) )
    {
        textAnswer = document.createTextNode('Invalid input busta.');
    }
    else
    {
        textAnswer = document.createTextNode('You are ' + ageInDays + ' days old.');
    }
    // Definindo o ID do elemento h1 que criamos como ageInDays, ficando id="ageInDays" no source html.
    h1.setAttribute('id', 'h1AgeDays');
    // Colocando a string textAnswer no elemento h1
    h1.appendChild(textAnswer);
    // Selecionando o div flex-box-result e colocando o elemento h1 nele.
    document.getElementById('flex-box-result').appendChild(h1);
}

// Função para retirar um elemento da página.
function reset(elementID)
{
    // Funcao simples para remover o elemento com id=elementID ao apertar o botao reset
    document.getElementById(elementID).remove();
}

// Challenge 2: Cat generator
// Função para mostrar uma imagem ou gif de um gato baseado no paramêtro passado.
function generateCat(type)
{
    let catImage = document.createElement('img');
    let catGif = document.createElement('img');
    // Tambem é possível armazenar um getElementById() em uma variável.
    let catDiv = document.getElementById('flex-box-cat');
     // Mostrando a imagem local de um gato.
    if(type == "image")
    {
        catImage.src = "/static/img/kitty.jpg";
        catImage.setAttribute('width', '150px');
        catImage.setAttribute('height', '200px');
        catImage.setAttribute('id', 'catImage');
        catDiv.appendChild(catImage);
    } // Mostrando o gif de um gato.
    else if(type == "gif")
    {
        catGif.src = "https://thecatapi.com/api/images/get?format=src&type=gif&size=small";
        catGif.setAttribute('width', '200px');
        catGif.setAttribute('heigth', '200px');
        catGif.setAttribute('id', 'catGif');
        catDiv.appendChild(catGif);
    }      
    // catDiv ja encurta document.getElementById('flex-box-cat') e chama o metodo appendChild()
}

function randomRange(min,max)
{ // Escolhendo um numero entre min e max, random() escolhe um numero decimal entre 0 e 1, multiplica esse valor por (max-min+1),
  // pega o valor inteiro dessa expressão e então soma pelo mínimo, para garantir que random seja pelo menos o mínimo sempre.
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

// Challenge 3: Rock, paper, scissors
function rpsDecision(choice, RNGchoice){
    // Solução alternativa, para decidir facilemente quem ganhou e comprimir o código
    // Obs; esses objetos em um objeto se comporta basicamente como um dicionário de Python.
    var rpsDatabase = {
        'rock': {'rock': "Tie!", 'paper': "You lost!", 'scissors': "You won!"},
        'paper': {'rock': "You Won!", 'paper': "Tie!", 'scissors': "You lost!"},
        'scissors': {'rock': "You lost!", 'paper': "You won!", 'scissors': "Tie!"}
    }
    // Leia se como rpsDatabase.choice.RNGchoice, acessando primeiro a escolha do usuario,
    // e então traduzindo em um valor string com a escolha do bot.
    let result = rpsDatabase[choice][RNGchoice];
    // Obs; necessario transformar em um nodo de texto para o resto da execução do programa.
    result = document.createTextNode(result);

    displayImageResult(choice, RNGchoice);
    textResult(result);
}

// Função que limpa todos os nodos filhos e então adiciona as 3 imagens.
function createRps(){
    let div = document.getElementById('flex-box-rps-div');
    let resultDiv = document.getElementById('result-box');
    let rock = createImageRps('rock');
    let paper = createImageRps('paper');
    let scissors = createImageRps('scissors');
    while(div.hasChildNodes())
        div.removeChild(div.firstChild);
    while(resultDiv.hasChildNodes())
        resultDiv.removeChild(resultDiv.firstChild);
    div.appendChild(rock);
    div.appendChild(paper);
    div.appendChild(scissors);
}

window.onload = createRps;

function textResult(result){
    // Obs; linhas 114 - 123 removidas de rpsDecision() para reduzir acoplamento do projeto ( cada função só deve fazer a sua função )
    let h1 = document.createElement('h1');
    h1.setAttribute('id','resulty');
    h1.appendChild(result);
    let div = document.getElementById('result-box');
    // While loop para verificar se o div tem filhos, se sim, limpar todos eles para substituir o output.
    while(div.hasChildNodes())
        div.removeChild(div.firstChild);
    // Isso sempre executa, não deve-se usar else se não a partir do segundo input há inconsistências no output.
    div.appendChild(h1);
}

// Funcao para criar uma imagem que fiz
// Obs; so funciona quando o ID e .png da imagem sao os mesmos, porem isso pode ser facilmente alterado pedindo imgSRC como parametro.
function createImage(imgID, size){
    let img = document.createElement('img');
    img.src = `/static/img/${imgID}.png`; // `string ${variavel} resto da string` 
    img.setAttribute('width', size);
    img.setAttribute('heigth', size);
    img.setAttribute('id', imgID);
    return img;
}


function createImageRps(imgID){
    let img = createImage(imgID, '150px');
    img.setAttribute('onclick', 'rpsGame(this)');
    return img;
} // Chamando a funcao como retorno, que pegara o retorno img de createImg e entao resumira essa funcao para retornar a imagem desejada.


function createImageResult(imgID, isPlayer){
// Removendo a interatividade das imagens para o usuário precisar clicar em 'Play Again' para jogar novamente.
    let img = createImage(imgID, '150px');
    if(isPlayer)
        img.setAttribute('style', 'box-shadow: 0px 10px 50px rgba(37, 58, 233, 1)');
    else
        img.setAttribute('style', 'box-shadow: 0px 10px 50px rgba(255, 0, 0, 1)');
    return img;
}


// Obs; sempre remover whitespace entre elementos do div pra nao ter output #text como o nodo filho.
function displayImageResult(choice, RNGchoice){
    let div = document.getElementById('flex-box-rps-div');
    let imgChoice = createImageResult(choice, true);
    let imgRNG = createImageResult(RNGchoice, false);
    while(div.hasChildNodes())
        div.removeChild(div.firstChild);
    div.appendChild(imgChoice);
    div.appendChild(imgRNG);
}


function rpsGame(yourChoice)
{
    let choices = { };
    // Como yourChoice é um objeto, se torna possível acessar os atributos desse elemento.
    choices.choice = yourChoice.id;
    choices.RNGchoice = randomRange(0,2);
    // Solução alternativa ao invés de um Switch para traduzir o RNG em escolha.
    possibleChoices = ['rock', 'paper', 'scissors'];
    choices.RNGchoice = possibleChoices[choices.RNGchoice];

    console.log(choices.choice + " vs " + choices.RNGchoice);
    rpsDecision(choices.choice, choices.RNGchoice);

    let newButton = createButton('playAgain','createRps()', 'Play Again');
    let div = document.getElementById('result-box');
    div.appendChild(newButton);
}

function createButton(buttonID, functionName, buttonText){
    let button = document.createElement('button');
    let text = document.createTextNode(buttonText);
    button.setAttribute('id', buttonID);
    button.setAttribute('class', 'btn btn-primary');
    button.setAttribute('onclick', functionName);
    button.appendChild(text);
    return button;
}

// Challenge 4: Change the colors of all buttons
// Variavel que seleciona todos elementos no codigo HTML com a tag especifica, nesse caso tds botões
let all_buttons = document.getElementsByTagName('button');

var copyAllButtons = [];
for(let i=0; i < all_buttons.length; i++)
{ // copiando a segunda classe ( que define a cor ) dos botoes e armazenando nesse array
    copyAllButtons.push(all_buttons[i].classList[1]);
}

function buttonColorChange(buttonThingy){
    if(buttonThingy.value === 'red')
        buttonsRed();
    else if(buttonThingy.value === 'green')
        buttonsGreen();
    else if(buttonThingy.value === 'reset')
        buttonColorReset();
    else if(buttonThingy.value === 'yellow')
        buttonsYellow();
    else if(buttonThingy.value === 'random')
        randomColors();
}

function buttonsRed(){
    for (let i = 0; i < all_buttons.length; i++) {
        // Removendo a segunda classe de todos os botões para tirar a cor deles.
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        // Logo após, adicionando a classe para tornar o botão vermelho.
        all_buttons[i].classList.add('btn-danger');    
    }
}

function buttonsGreen(){
    for(let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add('btn-success');
    }
}

function buttonsYellow(){
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add("btn-warning");
    }
}

function buttonColorReset(){
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        all_buttons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColors(){
    let all_colors = ["btn-primary", "btn-danger", "btn-warning", "btn-success"];
    for (let i = 0; i < all_buttons.length; i++) {
        all_buttons[i].classList.remove(all_buttons[i].classList[1]);
        // all_colors[randomRange(0,3)] seleciona uma cor aleatoriamente, que sera entao adicionada ao botao do indice i em cada loop.
        all_buttons[i].classList.add(all_colors[randomRange(0,3)]);
    }
}

// Challenge 5: Blackjack
// Criando objetos em um objeto, que funciona tipo como dicionario em Python,
// para poder acessar as tags span do jogador e do bot
let blackjackGame = {
    'you': {'scoreSpan': '#your-blackjack-result', 'div': '#your-box', 'score': 0},
    'dealer': {'scoreSpan': '#dealer-blackjack-result', 'div': '#dealer-box', 'score': 0},
    'cards': ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'],
    'cardsMap': { 'A': [1,11], '2': 2, '3': 3, '4': 4,  '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 10, 'Q': 10, 'K': 10},
    'scoreboard': { 'wins': 0, 'losses': 0, 'draws': 0},
}  // Definindo um array cards no objeto para selecionar todas as possiveis cartas do jogo
// Lembrando o padrão de nomear todo const com letras maiúsculas
const YOU = blackjackGame['you'];
const DEALER = blackjackGame['dealer'];
// usando essa constante para conter o audio swish.
const HIT_SOUND = new Audio('static/sounds/swish.m4a');
const WIN_SOUND = new Audio('static/sounds/cash.mp3');
const LOSS_SOUND = new Audio('static/sounds/aww.mp3');

var result_span = document.querySelector('#blackjack-result');
// Selecionando a tag com id 'blackjack-hit-button'
var hit_button = document.querySelector('#blackjack-hit-button');
var stand_button = document.querySelector('#blackjack-stand-button');
var deal_button = document.querySelector('#blackjack-deal-button');
// Executando a função blackjackhit quando a tag ( botão ) é clicada
hit_button.addEventListener('click', blackjackHit);
stand_button.addEventListener('click', blackjackStand);
deal_button.addEventListener('click', blackjackDeal);
// Basicamente faz o dever do atributo onclick so que com JS puro.

function cardDraw(activePlayer){
    // Terminar a função aqui caso bust já ter ocorrido.
    if (activePlayer['score'] > 21)
        return;
    // Selecionando entre o primeiro e o decimo terceiro elemento no array que consta no objeto blackjackGame.
    let cardID = blackjackGame.cards[randomRange(0,12)];
    showCard(activePlayer, cardID);
    updateScore(activePlayer, cardID);
    showScore(activePlayer);
    HIT_SOUND.play();
}
function blackjackHit(){
    cardDraw(YOU);
}

// Funcao criada para separar ações de blackjackHit(), não obrigatório,
// porém é uma boa prática.
function showCard(activePlayer, cardID){
    let cardImage = createImage(cardID, '100px');
    // usando playerDiv para selecionar o div do objeto player do objeto blackjackGame
    let playerDiv = document.querySelector(activePlayer['div']);
    playerDiv.appendChild(cardImage);
}
// obs; isso n faz parte do tutorial
function updateScore(activePlayer, cardID){
    let ace = blackjackGame['cardsMap']['A'];
    let cardValue;
    if (cardID === 'A' && activePlayer['score'] <= 10)
        cardValue = ace[1];
    else if(cardID === 'A' && activePlayer['score'] > 10)
        cardValue = ace[0];
    else
        cardValue = blackjackGame['cardsMap'][cardID];
    activePlayer['score'] += cardValue;       
}

function blackjackDeal() {
    // ifzinho para nao aceitar deal caso o jogador ja ter uma carta
    if(YOU['score'] !== 0 && DEALER['score'] === 0)
        return;
    // selecionando o div your-box e acessando todos os elementos com tag img neles.
    let yourImages = document.querySelector('#your-box').querySelectorAll('img');
    let yourSpan = document.querySelector('#your-blackjack-result');
    let dealerImages = document.querySelector('#dealer-box').querySelectorAll('img');
    let dealerSpan = document.querySelector('#dealer-blackjack-result');
    for (let i = 0; i < yourImages.length; i++) {
        yourImages[i].remove();
    }

    for(let i = 0; i < dealerImages.length; i++){
        dealerImages[i].remove();
    }

    yourSpan.textContent = '0';
    dealerSpan.textContent = '0';

    yourSpan.style.color = '#ffffff';
    dealerSpan.style.color = '#ffffff';

    YOU['score'] = 0;
    DEALER['score'] = 0;

    hit_button.disabled = false;
    stand_button.disabled = false;
}

function showScore(activePlayer){
    // selecionando a tag span do jogador atual
    let spanText = document.querySelector(activePlayer['scoreSpan']);
    if (activePlayer['score'] > 21){
        spanText.textContent = 'BUST!';
        spanText.style.color = 'red';
        blackjackStand();
    }
    else
        spanText.textContent = activePlayer['score'];
}
// Notação assíncrona, conteúdo avançado de JS
function sleep(ms){
    return new Promise(resolve => setTimeout(resolve, ms));
}

// antes chamada de dealerLogic()
// async para função assíncrona, igual ao C#
async function blackjackStand(){
    // let dealerActions = setTimeout(cardDraw(DEALER), 2000);
    // let dealerActions = setTimeout(function cardDraw(){
    //     cardDraw(DEALER);
    // }, 2000)
    // if(DEALER['score'] < 16 && DEALER['score'] < 21){
    //     clearTimeout(dealerActions);
    //     return
    // }
   if(YOU['score'] === 0)
        return;
    // Dinamicamente desativando os botões para o usuário não zoar e farmar wins.
    hit_button.disabled = true;
    stand_button.disabled = true; 
    while(DEALER['score'] < 16 && DEALER['score'] < 21){
        cardDraw(DEALER);
        // await irá pausar o while loop até passar 1 segundo.
        await sleep(1000);
    }    
    decideWinner();
}

function decideWinner(){
    let yourScore = YOU['score'];
    let dealerScore = DEALER['score'];

    if((yourScore > 21 && dealerScore > 21) || yourScore === dealerScore){
        result_span.textContent = "Draw!";
        updateScoreboard('draws');
    }   
    else if ((yourScore <= 21 && yourScore > dealerScore) || dealerScore > 21){
        result_span.textContent = "You won!";
        result_span.style.color = 'green';
        WIN_SOUND.play();
        updateScoreboard('wins');
    }
    else{
        result_span.textContent = "You lost";
        result_span.style.color = 'red';
        LOSS_SOUND.play();
        updateScoreboard('losses');
    }

}

function updateScoreboard(scoreboadAttribute){
    let scoreboardElement = ++blackjackGame['scoreboard'][scoreboadAttribute];
    document.querySelector(`#${scoreboadAttribute}`).textContent = scoreboardElement;
}
