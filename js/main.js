/* LISTA DE ELEMENTOS DO JOGO */

const objetos = [] // lista de objetos no jogo
const players = [] // lista de players no jogo

/* EVENTOS */

let debugTecla = 'nenhuma' // variável que vamos usar só verificar qual tecla será pressionada

// window.addEventListener "keydown" é um evento de que captura tecla na janela
// exemplo se você teclar w teremos salvo esse valor na variável evento
window.addEventListener("keydown" , (evento) => { 

    debugTecla = evento.key // evento.key é valor pressionado no teclado em forma e string 

    // usamos o forEach para pecorrer a lista de players e passamos o evento para o movimento do player
    players.forEach((player) => player.movimento(evento.key))

}) 

function main() { // função princiapl do jogo que realiza as opreções antes do jogo rodar

    players.push(new Player(WIDTH / 2 , HEIGHT / 2 , 50 , 50)) // criamos um novo Player e passamos ele para lista de players
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
    

}

function render() { // função que ira renderizar o elementos do jogo

    ctx.fillStyle = "white" // dizemos que o proximos elementos terão seu prenchimento pintado de branco
    ctx.fillRect(0 , 0 , WIDTH  , HEIGHT) // desenhamos um quadrado que cobre toda a tela, fillRect(x , y , largura , altura)

    players.forEach((player) => { // usamos o forEach para pecorrer a lista de players

        player.render("red") // para cada objeto na lista renderizamos ele

    })

    // dizemos que o proximos elementos terão seu prenchimento pintado de preto
    ctx.fillStyle = "black"

    // dizemos que o proximos elementos terão sua fonte sendo 25px do formato ARIAL
    ctx.font = "25px ARIAL"

    // renderizamos um texto que nesse caso será da variável debugTecla
    ctx.fillText("tecla pressionada: " + debugTecla , 50 , 50)

}

main() // chama a execução da função principal
