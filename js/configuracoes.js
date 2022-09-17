/* arquivo de configuração do jogo */

const canvas = document.getElementById("canvas") // armazenamos o elemento canvas que está no html numa variável

// definindo a largura e altura da tela de renderização 

const HEIGHT = window.innerHeight // pegando a altura da janela da pagina web
const WIDTH = window.innerWidth // pegando a largura da janela da pagina web

canvas.height = HEIGHT // aplicando a altura da janela na altura do canvas
canvas.width = WIDTH // aplicando a largura da janela na largura do canvas

// variável que ira ser reponsavel por fonecer os metodos de renderização

const ctx = canvas.getContext("2d") // dizemos que ctx ira renderizar o canvas em 2D

// variável que ira armazenar se o jogo ta rodando

let run = false // incialmente damos a ela o valor de falso

// preparando as variáveis que armazenam os frames por segundo

const times = [];
let fps = 0;