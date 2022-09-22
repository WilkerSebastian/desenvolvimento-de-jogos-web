/*

    Herança é um princípio de orientação a objetos, que permite que classes compartilhem 
    atributos e métodos, através de heranças. Ela é usada na intenção de reaproveitar 
    código ou comportamento generalizado ou especializar operações ou atributos.

    nesse caso Player herda do Objeto

*/
class Player extends Objeto {

    /*

        Quando trabalhamos com herança a superclasse é a classe que herdamos e sub classe é a
        classe que herda da superclasse.
        A subclasse pode sobrescrever métodos da superclasse e, claro, implementar
        seus próprios métodos. 
        Cada classe possui duas referências: o this, que referencia a instância dela mesma e
        o super que referencia a superclasse.

    */
    constructor(x, y, width, height, speed) { // speed é um parâmetro que usaremos para definir a velocidade do player

        super(x, y, width, height , true)
        this.speed = speed

    }

    update(objs) { // função responsavel pela logica do objeto

        if (keys.a) { // se A tecla a foi pressionada

            this.x -= this.speed // diminuimos a posição x do player conforme o valor de speed

        }
        if (keys.d) { // se D tecla a foi pressionada

            this.x += this.speed // aumentamos a posição x do player conforme o valor de speed

        }
        if (keys.w) { // se W tecla a foi pressionada

            this.y -= this.speed // diminuimos a posição y do player conforme o valor de speed

        }
        if (keys.s) { // se S tecla a foi pressionada

            this.y += this.speed // aumentamos a posição y do player conforme o valor de speed

        }

        for (let index = 0; index < objs.length; index++) {

            const colisor = this.isCollided(objs[index])

            if (colisor.collided) {

                this.x = colisor.x
                this.y = colisor.y
                break;

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
