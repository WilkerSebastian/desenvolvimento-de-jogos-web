const canvas = document.getElementById("canvas")

const HEIGHT = window.innerHeight
const WIDTH = window.innerWidth

canvas.height = HEIGHT
canvas.width = WIDTH

const ctx = canvas.getContext("2d")

let limiteFPS = 60
let fps = 0;

const keys = {

    "a": false,
    "d": false,
    "w": false,
    "s": false

}


function createImage(nome) {

    const img = new Image()
    img.src = `./sprites/${nome}.png`

    return img

}

const imagens = {

    "oceano": createImage("oceano"),
    "bf109": createImage("bf109"),
    "spitfire": createImage("spitfire"),
    "tiro": createImage("tiro")

}

let colisao = false

function saiuDoMundo(obj) {

    const sumX = obj.x + obj.width
    const sumY = obj.y + obj.height

    const width = WIDTH - sumX
    const height = HEIGHT - sumY

    return sumX > width || sumX < -sumX || sumY > height || sumY < -sumY

}

const inimigos = []

let player1 
let fundo

let clicando = false

let spanw = false