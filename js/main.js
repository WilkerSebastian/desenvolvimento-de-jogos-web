/* LISTA DE ELEMENTOS DO JOGO */

const objetos = [] // lista de objetos no jogo

let player1 // será a variável que armazenaremos o player

/* EVENTOS */

let debugTecla = 'nenhuma' // variável que vamos usar só verificar qual tecla será pressionada

// window.addEventListener "keydown" é um evento de que captura tecla pressionada na janela
// exemplo se você teclar w teremos salvo esse valor na variável evento
window.addEventListener("keydown" , (evento) => { 

    debugTecla = evento.key // evento.key é valor pressionado no teclado em forma de string 
    keys[evento.key] = true // sé a tecla pressionada estiver presente no objeto keys dizemos que seu valor será verdadeira

}) 
// window.addEventListener "keyup" é um evento de que captura tecla solta na janela
// exemplo se você soltar a telca w teremos salvo esse valor na variável evento
window.addEventListener("keyup" , (evento) => {

    debugTecla = "nenhuma" // evento.key é valor pressionado no teclado em forma de string 
    keys[evento.key] = false // sé a tecla pressionada estiver presente no objeto keys dizemos que seu valor será falso

})

function main() { // função princiapl do jogo que realiza as opreções antes do jogo rodar

    player1 = new Player(WIDTH / 2 , HEIGHT / 2 , 50 , 50 , 8) // criamos um novo Player e passamos ele para lista de players
    setTimeout(loop , 1000 / limiteFPS) // dizemoss que a função loop será chamada a cada 16 milessegundos que da 60 chamas por segundo

}

function loop() { // função que realiza o loop de lógica e renderização

    fps++ // adiciona mais 1 na contagem de fps

    if (fps > limiteFPS) { // se o fps for maior que limite de FPS
        
        fps = limiteFPS - 1 // mudamos o valor de fps para o limite de FPS menos 1

    }

    render() // chamada da função de renderização
    update() // chamada da função de lógica

    setTimeout(loop , 1000 / limiteFPS) // dizemoss que a função loop será chamada a cada 16 milessegundos que da 60 chamas por segundo

}

function update() { // função onde ficara a lógica do jogo
    
    player1.update() // chamamos o update do player


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

    player1.render("red") // renderizamos o player na cor vermelha

    // dizemos que o proximos elementos terão seu prenchimento pintado de preto
    ctx.fillStyle = "black"

    // dizemos que o proximos elementos terão sua fonte sendo 25px do formato ARIAL
    ctx.font = "25px ARIAL"

    // renderizamos um texto que nesse caso será da variável debugTecla
    ctx.fillText("tecla pressionada: " + debugTecla , 50 , 50)

}

main() // chama a execução da função principal
