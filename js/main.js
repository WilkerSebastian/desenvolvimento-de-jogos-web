/* LISTA DE ELEMENTOS DO JOGO */

const objetos = [] // lista de objetos no jogo
const players = [] // lista de players no jogo

/* EVENTOS */

let debugTecla = 'nenhuma' // variável que vamos usar só verificar qual tecla será pressionada

// window.addEventListener "keydown" é um evento de que captura tecla na janela
// exemplo se você teclar w teremos salvo esse valor na variável evento
window.addEventListener("keydown", (evento) => {

    if (keys[evento.key]) { // caso o jogador aperte uma tecla ques está definida nesse objeto literal

        keys[evento.key].pressed = true // dizemos que a tecla está sendo pressionada
        players[0].lastKey = evento.key // passamos a tecla pressionada para o player 1

    }

    if (arrows[evento.key]) { // caso o jogador aperte uma tecla ques está definida nesse objeto literal

        arrows[evento.key].pressed = true // dizemos que a tecla está sendo pressionada
        players[1].lastKey = evento.key // passamos a tecla pressionada para o player 2

    }

})
window.addEventListener("keyup", (evento) => {

    if (keys[evento.key]) { // caso o jogador aperte uma tecla ques está definida nesse objeto literal

        keys[evento.key].pressed = false // dizemos que a tecla não está sendo pressionada 
        players[0].lastKey = "nenhuma" // passamos que a última tecla pressionada será nenhuma

    }

    if (arrows[evento.key]) { // caso o jogador aperte uma tecla ques está definida nesse objeto literal

        arrows[evento.key].pressed = false // dizemos que a tecla não está sendo pressionada
        players[1].lastKey = "nenhuma" // passamos que a última tecla pressionada será nenhuma

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

    if (keys.a.pressed && players[0].lastKey == "a") { // caso a tecla pressiona pelo player sejá respectivamente a mesma do objeto literal

        players[0].movimento("esquerda") // movimento de ir para esquerda

    }
    else if (keys.d.pressed && players[0].lastKey == "d") { // caso a tecla pressiona pelo player sejá respectivamente a mesma do objeto literal

        players[0].movimento("direita") // movimento de ir para direita

    }
    else if (keys.w.pressed && players[0].lastKey == "w") { // caso a tecla pressiona pelo player sejá respectivamente a mesma do objeto literal

        players[0].movimento("emcima") // movimento de subir

    }
    else if (keys.s.pressed && players[0].lastKey == "s") { // caso a tecla pressiona pelo player sejá respectivamente a mesma do objeto literal

        players[0].movimento("embaixo") // movimento de descer

    } else { // caso não seja nenhum das condições anteriores

        players[0].movimento("nenhuma") // não será realizado movimento

    }



    if (arrows.ArrowLeft.pressed && players[1].lastKey == "ArrowLeft") { // caso a tecla pressiona pelo player sejá respectivamente a mesma do objeto literal

        players[1].movimento("esquerda") // movimento de ir para esquerda

    }
    else if (arrows.ArrowRight.pressed && players[1].lastKey == "ArrowRight") { // caso a tecla pressiona pelo player sejá respectivamente a mesma do objeto literal

        players[1].movimento("direita") // movimento de ir para direita

    }
    else if (arrows.ArrowUp.pressed && players[1].lastKey == "ArrowUp") { // caso a tecla pressiona pelo player sejá respectivamente a mesma do objeto literal

        players[1].movimento("emcima") // movimento de subir

    }
    else if (arrows.ArrowDown.pressed && players[1].lastKey == "ArrowDown") { // caso a tecla pressiona pelo player sejá respectivamente a mesma do objeto literal

        players[1].movimento("embaixo") // movimento de descer

    } else { // caso não seja nenhum das condições anteriores

        players[1].movimento("nenhuma") // não será realizado movimento

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

    // renderizamos um texto que nesse caso será da teclas de movimento dos players
    ctx.fillText("tecla pressionada pelo player 1: " + players[0].lastKey, 50, 50)
    ctx.fillText("tecla pressionada pelo player 2: " + players[1].lastKey, 50, 100)

}

main() // chama a execução da função principal