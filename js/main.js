/* LISTA DE ELEMENTOS DO JOGO */

const objetos = [] // lista de objetos no jogo

let player1 // será a variável que armazenaremos o player 1
let player2 // será a variável que armazenaremos o player 2

/* EVENTOS */

let debugTecla = 'nenhuma' // variável que vamos usar só verificar qual tecla será pressionada
let debugArrow = 'nenhuma' // variável que vamos usar só verificar qual seta foi pressionada

// window.addEventListener "keydown" é um evento de que captura tecla pressionada na janela
// exemplo se você teclar w teremos salvo esse valor na variável evento
window.addEventListener("keydown", (evento) => {

    keys[evento.key] = true // sé a tecla pressionada estiver presente no objeto keys dizemos que seu valor será verdadeira
    arrows[evento.key] = true // sé a tecla pressionada estiver presente no objeto arrows dizemos que seu valor será verdadeira

})
// window.addEventListener "keyup" é um evento de que captura tecla solta na janela
// exemplo se você soltar a telca w teremos salvo esse valor na variável evento
window.addEventListener("keyup", (evento) => {

    if (keys[evento.key]) {

        debugTecla = "nenhuma"

        keys[evento.key] = false // sé a tecla pressionada estiver presente no objeto keys dizemos que seu valor será falso

    }

    if (arrows[evento.key]) {

        debugArrow = "nenhuma"

        arrows[evento.key] = false

    }

})

function main() { // função princiapl do jogo que realiza as opreções antes do jogo rodar

    player1 = new Player(WIDTH / 2, HEIGHT / 2, 50, 50, 8) // criamos um novo Player e passamos ele para lista de players

    player2 = new Player(WIDTH / 3, HEIGHT / 2, 50, 50, 8) // criamos um novo Player e passamos ele para lista de players

    setTimeout(loop, 1000 / limiteFPS) // dizemoss que a função loop será chamada a cada 16 milessegundos que da 60 chamas por segundo

}

function loop() { // função que realiza o loop de lógica e renderização

    fps++ // adiciona mais 1 na contagem de fps

    if (fps > limiteFPS) { // se o fps for maior que limite de FPS

        fps = limiteFPS - 1 // mudamos o valor de fps para o limite de FPS menos 1

    }

    render() // chamada da função de renderização
    update() // chamada da função de lógica

    setTimeout(loop, 1000 / limiteFPS) // dizemoss que a função loop será chamada a cada 16 milessegundos que da 60 chamas por segundo

}

function update() { // função onde ficara a lógica do jogo

    player1.update() // chamamos o update do player, como ele se movimentara pelo movimento padrão nem precisamos passar parâmetro de update

    player2.update(true) // chamamos o update do player, como ele se movimentara pelas setinhas precisamos passar true como parâmetro de update

}

function render() { // função que ira renderizar o elementos do jogo

    ctx.fillStyle = "white" // dizemos que o proximos elementos terão seu prenchimento pintado de branco
    ctx.fillRect(0, 0, WIDTH, HEIGHT) // desenhamos um quadrado que cobre toda a tela, fillRect(x , y , largura , altura)

    player1.render("red")

    player2.render("blue")

    // dizemos que o proximos elementos terão seu prenchimento pintado de preto
    ctx.fillStyle = "black"

    // dizemos que o proximos elementos terão sua fonte sendo 25px do formato ARIAL
    ctx.font = "25px ARIAL"

    player1.render("red") // renderizamos o player na cor vermelha

    // dizemos que o proximos elementos terão seu prenchimento pintado de preto
    ctx.fillStyle = "black"

    // dizemos que o proximos elementos terão sua fonte sendo 25px do formato ARIAL
    ctx.font = "25px ARIAL"

    // renderizamos um texto que nesse caso será da variável debugTecla
    ctx.fillText("tecla pressionada pelo player 1: " + debugTecla, 50, 50)
    ctx.fillText("tecla pressionada pelo player 2: " + debugArrow, 50, 100)

}

main() // chama a execução da função principal
