const objetos = [] // lista de objetos no jogo

function main() { // função princiapl do jogo que realiza as opreções antes do jogo rodar

    objetos.push(new Objeto(WIDTH / 2 , HEIGHT / 2 , 50 , 50))
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

    objetos.forEach((obj) => { // usamos o forEach para pecorrer a lista de objetos

        obj.render("red") // para cada objeto na lista renderizamos ele

    })

}

main() // chama a execução da função principal