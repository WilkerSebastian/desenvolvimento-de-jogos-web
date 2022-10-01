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
    constructor(x, y, width, height, acceleration) { // speed é um parâmetro que usaremos para definir a velocidade do player

        super(x, y, width, height, true) // player sempre tem colisão
        this.acceleration = acceleration
        this.speed = 0 // inicialmente a velocidade do player é 0
        this.direcao = "baixo" // inicialmente a direção do movimento do player é pra baixo
        this.podePular = true // e incialmente ele pode pular

    }

    update(objs) { // função responsavel pela logica do objeto

        if (this.y < HEIGHT - objs[0].height && this.direcao == "baixo") { // se o objeto está acma do chão e a direção está para baixo

            this.speed += this.acceleration // somamos a velocidade com a aceleração
            this.y += this.speed // e aumentamos a posição y do player com a velocide
 
        } else if(this.direcao == "cima") { // se não e a direção for para cima 

            this.speed += this.acceleration / 2.5 // aumentamos a velocidade com a aceleração dvidida em 2.5
            this.y -= this.speed // e reduzimos a posição y do player com a velocidade

            if (this.y < HEIGHT / 3) { // se a posição do player ja ter ultrapassado 1 terço da tela

                this.direcao = "baixo" // então mudamos a direção
                
            }

        } else { // se não for nenhuma caso a posição do player será encostada com o chão

            this.y = HEIGHT - objs[0].height

        }

        if (keys.a) { // se A tecla a foi pressionada

            this.x -= this.speed // diminuimos a posição x do player conforme o valor de speed

        }
        if (keys.d) { // se D tecla a foi pressionada

            this.x += this.speed // aumentamos a posição x do player conforme o valor de speed

        }
        if (keys.space && this.podePular) { // se a tecla space foi pressionada e se o player pode pular

            this.podePular = false // dizemos que o player não pode mais pular
            setTimeout(() => this.podePular = true , 500) // dizemos que o player pode pular depois de 500 milessegundos
            this.direcao = "cima" // e passamos a direção para cima

        }

        for (let index = 0; index < objs.length; index++) { // iremos realizar um ciclo de repetição que pecorra todo os objetos

            const colisor = this.isCollided(objs[index]) // iremos receber um colisor levando em comparação do objeto

            if (colisor.collided) { // se a colisão ocorreu

                this.speed = this.acceleration
                this.x = colisor.x // então a posição x do player será a mesma do colisor
                this.y = colisor.y // então a posição y do player será a mesma do colisor
                break; // então paramos o ciclo de repetição caso ocorra a colisão

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
