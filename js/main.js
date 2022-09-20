/* LISTA DE ELEMENTOS DO JOGO */

const objetos = [] // lista de objetos no jogo
const players = [] // lista de players no jogo

/* EVENTOS */

let debugTecla = 'nenhuma' // variável que vamos usar só verificar qual tecla será pressionada

// window.addEventListener "keydown" é um evento de que captura tecla na janela
// exemplo se você teclar w teremos salvo esse valor na variável evento
window.addEventListener("keydown", (evento) => {

    if (keys[evento.key]) {

        keys[evento.key].pressed = true
        players[0].lastKey = keys[evento.key].pressed ? keys[evento.key].tecla : "nenhuma"

    }

    if (arrows[evento.key]) {

        arrows[evento.key].pressed = true
        players[1].lastKey = arrows[evento.key].pressed ? arrows[evento.key].tecla : "nenhuma"

    }

})
window.addEventListener("keyup", (evento) => {

    if (keys[evento.key]) {

        keys[evento.key].pressed = false
        players[0].lastKey = "nenhuma"

    }

    if (arrows[evento.key]) {

        arrows[evento.key].pressed = false
        players[1].lastKey = "nenhuma"

    }

})

function main() { // função princiapl do jogo que realiza as opreções antes do jogo rodar

    players.push(new Player(WIDTH / 2, HEIGHT / 2, 50, 50)) // criamos um novo Player e passamos ele para lista de players
    players.push(new Player(WIDTH / 3, HEIGHT / 2, 50, 50)) // criamos um novo Player e passamos ele para lista de players
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

    if (keys.a.pressed && players[0].lastKey == "a") {

        players[0].movimento("esquerda")

    }
    else if (keys.d.pressed && players[0].lastKey == "d") {

        players[0].movimento("direita")

    }
    else if (keys.w.pressed && players[0].lastKey == "w") {

        players[0].movimento("emcima")

    }
    else if (keys.s.pressed && players[0].lastKey == "s") {

        players[0].movimento("embaixo")

    } else {

        players[0].movimento("nenhuma")

    }



    if (arrows.ArrowLeft.pressed && players[1].lastKey == "ArrowLeft") {

        players[1].movimento("esquerda")

    }
    else if (arrows.ArrowRight.pressed && players[1].lastKey == "ArrowRight") {

        players[1].movimento("direita")

    }
    else if (arrows.ArrowUp.pressed && players[1].lastKey == "ArrowUp") {

        players[1].movimento("emcima")

    }
    else if (arrows.ArrowDown.pressed && players[1].lastKey == "ArrowDown") {

        players[1].movimento("embaixo")

    } else {

        players[1].movimento("nenhuma")

    }

}

function render() { // função que ira renderizar o elementos do jogo

    ctx.fillStyle = "white" // dizemos que o proximos elementos terão seu prenchimento pintado de branco
    ctx.fillRect(0, 0, WIDTH, HEIGHT) // desenhamos um quadrado que cobre toda a tela, fillRect(x , y , largura , altura)

    players.forEach((player) => { // usamos o forEach para pecorrer a lista de players

        player.render("red") // para cada objeto na lista renderizamos ele

    })

    // dizemos que o proximos elementos terão seu prenchimento pintado de preto
    ctx.fillStyle = "black"

    // dizemos que o proximos elementos terão sua fonte sendo 25px do formato ARIAL
    ctx.font = "25px ARIAL"

    // renderizamos um texto que nesse caso será da variável debugTecla
    ctx.fillText("tecla pressionada pelo player 1: " + players[0].lastKey, 50, 50)
    ctx.fillText("tecla pressionada pelo player 2: " + players[1].lastKey, 50, 100)

}

main() // chama a execução da função principal