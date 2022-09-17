function main() { // função princiapl do jogo que realiza as opreções antes do jogo rodar

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

    ctx.fillStyle = "black" // dizemos que o proximos elementos terão seu prenchimento pintado de preto
    ctx.font = "30px ARIAL" // dizemos que a fonte será ARIAL e de 30px de tamanho
    ctx.fillText("FPS: " + fps, WIDTH / 2 , HEIGHT / 2) // dizemos que queremos um texto e que ele ficara no centro da tela, fillText(texto , x , y)

}

main() // chama a execução da função principal