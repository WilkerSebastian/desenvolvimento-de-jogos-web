window.addEventListener("keydown" , (evento) => { 

    debugTecla = evento.key 
    keys[evento.key] = true 

}) 

let intervalo

window.addEventListener("keyup" , (evento) => {

    debugTecla = "nenhuma" 
    keys[evento.key] = false 

    player1.movimentando = false 

})
window.addEventListener("mousedown" , () => {

    intervalo = setInterval(() => {
        
        player1.atirar()
        ciclando = true
    
    } , 1000 / limiteFPS)


})
window.addEventListener("mouseup" , () => {

    clicando = false
    clearInterval(intervalo)

})

function main() { 

    fundo = new Fundo(0 , 0 , WIDTH , HEIGHT)

    player1 = new Player(WIDTH / 2 , HEIGHT / 2 , 100 , 150 , 8 ,  "spitfire" , 100) 

    inimigos.push(new Inimigo(0 , 0 , 100 , 150 , 5 , "bf109" , 25))

    setTimeout(loop , 1000 / limiteFPS) 

}

function loop() { 

    fps++ 

    if (fps > limiteFPS) { 
        
        fps = limiteFPS - 1 

    }

    render() 
    update() 

    setTimeout(loop , 1000 / limiteFPS) 

}

function update() { 

    if (spanw) {
        
        inimigos.push(new Inimigo(Math.random() * WIDTH , 0 , 150 , 150 , 5 , "bf109" , 25))
        spanw = false
        setTimeout(() => spanw = true , 10000)

    }
    
    fundo.update()

    player1.update()
    player1.tiros.forEach((tiro) => tiro.update())

    inimigos.forEach((inimigo) => {
        
        inimigo.update()
        inimigo.tiros.forEach((tiro) => tiro.update())


    
    })

}

function render() { 

    fundo.render()

    player1.render()
    player1.tiros.forEach((tiro) => tiro.render())

    inimigos.forEach((inimigo) => {
        
        inimigo.render()
        inimigo.tiros.forEach((tiro) => tiro.render())
    
    })

}

main() 