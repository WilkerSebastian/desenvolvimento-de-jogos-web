function main() { // função princiapl do jogo que realiza as opreções antes do jogo rodar

    run = !run // mudamos o estado do jogo rodando para o inverso do estado, por exemplo se ele for falso agora ela será verdadeira

    if (run) { // se o jgo tiver rodando

        loop() // chamamos a função de loop

    }

}

function loop() { // função que realiza o loop de lógica e renderização

    const now = performance.now(); // ele pega os milissegundos atual

    // enquanto a qauntidade de tempos for maior que 0 E o primeiro tempo registrado seja menor que o milisegundo atual - 1000
    while (times.length > 0 && times[0] <= now - 1000) { 

        times.shift(); // remove o primeito tempo registrado

    }

    times.push(now); // adiciona um tempo

    fps = times.length; // fps vai ser a quantida de tempos registrados

    render() // chamada da função de renderização
    update() // chamada da função de lógica

    window.requestAnimationFrame(loop) // faz requesição do frame autal da tela para função de loop

}

function update() { // função onde ficara a lógica do jogo



}

function render() { // função que ira renderizar o elementos do jogo

    ctx.fillStyle = "white" // dizemos que o proximos elementos terão seu prenchimento pintado de branco
    ctx.fillRect(0 , 0 , WIDTH  , HEIGHT) // desenhamos um quadrado que cobre toda a tela, fillRect(x , y , largura , altura)

    ctx.fillStyle = "black" // dizemos que o proximos elementos terão seu prenchimento pintado de preto
    ctx.font = "30px ARIAL" // dizemos que a fonte será ARIAL e de 30px de tamanho
    ctx.fillText("FPS: " + fps, WIDTH / 2 , HEIGHT / 2) // dizemos que queremos um texto e que ele ficara no centro da tela, fillText(texto , x , y)

}

main() // chama a execução da função principal