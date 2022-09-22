/* arquivo de configuração do jogo */

const canvas = document.getElementById("canvas") // armazenamos o elemento canvas que está no html numa variável

// definindo a largura e altura da tela de renderização 

const HEIGHT = window.innerHeight // pegando a altura da janela da pagina web
const WIDTH = window.innerWidth // pegando a largura da janela da pagina web

canvas.height = HEIGHT // aplicando a altura da janela na altura do canvas
canvas.width = WIDTH // aplicando a largura da janela na largura do canvas

// variável que ira ser reponsavel por fonecer os metodos de renderização

const ctx = canvas.getContext("2d") // dizemos que ctx ira renderizar o canvas em 2D

// preparando as variáveis que armazenam os frames por segundo

let limiteFPS =  60 // variável que ira determinar o máximo de frames renderizados
let fps = 0;

// Objetos literais que armazenaram a teclas que pode ser usadas e se estão pressionadas ou não

const keys = { // objeto literal para as teclas normais

    "a": { 
        
        pressed:false, // variável que armazena se a tecla foi pressionada ou não, incialmente seu valor é falso 
        tecla:"a" // variável que armazena a tecla que foi pressionada em forma de string
    
    },
    "s": {
        
        pressed:false, // variável que armazena se a tecla foi pressionada ou não, incialmente seu valor é falso
        tecla:"s" // variável que armazena a tecla que foi pressionada em forma de string
    
    },
    "d": {
        
        pressed:false, // variável que armazena se a tecla foi pressionada ou não, incialmente seu valor é falso
        tecla:"d" // variável que armazena a tecla que foi pressionada em forma de string
    
    },
    "w": {
        
        pressed:false, // variável que armazena se a tecla foi pressionada ou não, incialmente seu valor é falso
        tecla:"w" // variável que armazena a tecla que foi pressionada em forma de string
    
    }

}

const arrows = { // objeto literal para as teclas do tipoi seta

    "ArrowUp": {
        
        pressed:false, // variável que armazena se a tecla foi pressionada ou não, incialmente seu valor é falso
        tecla:"ArrowUp" // variável que armazena a tecla que foi pressionada em forma de string
    
    },
    "ArrowLeft": {
        
        pressed:false, // variável que armazena se a tecla foi pressionada ou não, incialmente seu valor é falso
        tecla:"ArrowLeft" // variável que armazena a tecla que foi pressionada em forma de string
    
    },
    "ArrowDown": {
        
        pressed:false, // variável que armazena se a tecla foi pressionada ou não, incialmente seu valor é falso
        tecla:"ArrowDown" // variável que armazena a tecla que foi pressionada em forma de string
    
    },
    "ArrowRight": {
        
        pressed:false, // variável que armazena se a tecla foi pressionada ou não, incialmente seu valor é falso
        tecla:"ArrowRight" // variável que armazena a tecla que foi pressionada em forma de string
    
    }

}