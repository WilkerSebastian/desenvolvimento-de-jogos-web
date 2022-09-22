/*

    Herança é um princípio de orientação a objetos, que permite que classes compartilhem 
    atributos e métodos, através de heranças. Ela é usada na intenção de reaproveitar 
    código ou comportamento generalizado ou especializar operações ou atributos.

    nesse caso Player herda do Objeto

*/
class Player extends Objeto {

    constructor(x, y, width, height , speed) { // speed é um parâmetro que usaremos para definir a velocidade do player

        super(x, y, width, height)
        this.speed = speed

    }

    update(arrow) { // função responsavel pela logica do objeto, e no caso arrow será um parâmetro booleano que definira se o movimento do personagem será pelas setinhas ou não

        if (arrow) { // se arrow for true

            if (arrows.ArrowLeft) { // se A tecla a foi pressionada
            
                this.x -= this.speed // diminuimos a posição x do player conforme o valor de speeddebugTecla = keys[evento.key] ? evento.key : "nenhuma" // evento.key é valor pressionado no teclado em forma de string e o salvaremos no debug caso a tecla pressionada esteja presente no objeto literal keys
                debugArrow = "ArrowLeft" // definimos que a arrow de debug será referente a setinha que movimentou o player 
    
            }
            if (arrows.ArrowRight) { // se D tecla a foi pressionada
                
                this.x += this.speed // aumentamos a posição x do player conforme o valor de speed
                debugArrow = "ArrowRight" // definimos que a arrow de debug será referente a setinha que movimentou o player
    
            }
            if (arrows.ArrowUp) { // se W tecla a foi pressionada
    
                this.y -= this.speed // diminuimos a posição y do player conforme o valor de speed
                debugArrow = "ArrowUp" // definimos que a arrow de debug será referente a setinha que movimentou o player

            }
            if (arrows.ArrowDown) { // se S tecla a foi pressionada
    
                this.y += this.speed // aumentamos a posição y do player conforme o valor de speed
                debugArrow = "ArrowDown" // definimos que a arrow de debug será referente a setinha que movimentou o player

            }
            
        } else { // se não
            
            if (keys.a) { // se A tecla a foi pressionada
            
                this.x -= this.speed // diminuimos a posição x do player conforme o valor de speed
                debugTecla = "A" // definimos que a tecla de debug será referente a tecla que movimentou o player
    
            }
            if (keys.d) { // se D tecla a foi pressionada
                
                this.x += this.speed // aumentamos a posição x do player conforme o valor de speed
                debugTecla = "D" // definimos que a tecla de debug será referente a tecla que movimentou o player
    
            }
            if (keys.w) { // se W tecla a foi pressionada
    
                this.y -= this.speed // diminuimos a posição y do player conforme o valor de speed
                debugTecla = "W" // definimos que a tecla de debug será referente a tecla que movimentou o player

            }
            if (keys.s) { // se S tecla a foi pressionada
    
                this.y += this.speed // aumentamos a posição y do player conforme o valor de speed
                debugTecla = "S" // definimos que a tecla de debug será referente a tecla que movimentou o player

            }

        }

    }

    render(cor) { // função responsavel 

        // dizemos que o proximos elementos terão seu prenchimento pintado de preto
        ctx.fillStyle = "black"

        // dizemos que o proximos elementos terão sua fonte sendo 25px do formato ARIAL
        ctx.font = "25px ARIAL"

        // renderizamos um texto que nesse caso será da variável x do player
        ctx.fillText("x: " + this.x.toFixed(2), this.x, this.y - this.height) // toFixed(2) só pra deixar ele mostar 2 casas depois da vírgula
        // renderizamos um texto que nesse caso será da variável y do player
        ctx.fillText("y: " + this.y.toFixed(2), this.x, this.y - (this.height / 2)) // toFixed(2) só pra deixar ele mostar 2 casas depois da vírgula

        ctx.fillStyle = cor // definimos que a cor de renderização será a cor que recebemos como parâmetro
        ctx.fillRect(this.x, this.y, this.width, this.height) // vamos renderizar um quadrado com os parâmetros do objeto

    }

}
