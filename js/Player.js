/*

    Herança é um princípio de orientação a objetos, que permite que classes compartilhem 
    atributos e métodos, através de heranças. Ela é usada na intenção de reaproveitar 
    código ou comportamento generalizado ou especializar operações ou atributos.

    nesse caso Player herda do Objeto

*/
class Player extends SpriteSheet {

    /*

        Quando trabalhamos com herança a superclasse é a classe que herdamos e sub classe é a
        classe que herda da superclasse.
        A subclasse pode sobrescrever métodos da superclasse e, claro, implementar
        seus próprios métodos. 
        Cada classe possui duas referências: o this, que referencia a instância dela mesma e
        o super que referencia a superclasse.

    */
    constructor(x, y, width, height, speed , nome) { // speed é um parâmetro que usaremos para definir a velocidade do player

        super(x, y, width, height, true , nome) // player sempre tem colisão
        this.speed = speed

    }

    update(objs) { // função responsavel pela logica do objeto

        if (keys.a) { // se A tecla a foi pressionada

            this.x -= this.speed // diminuimos a posição x do player conforme o valor de speed
            this.animacao = "andar"
            this.direita = false
            this.movimentando = true

        }
        if (keys.d) { // se D tecla a foi pressionada

            this.x += this.speed // aumentamos a posição x do player conforme o valor de speed
            this.x += this.speed
            this.animacao = "andar"
            this.direita = true
            this.movimentando = true

        }
        if (keys.w) { // se W tecla a foi pressionada

            this.y -= this.speed // diminuimos a posição y do player conforme o valor de speed
            this.y -= this.speed
            this.animacao = "cima"
            this.movimentando = true

        }
        if (keys.s) { // se S tecla a foi pressionada

            this.y += this.speed // aumentamos a posição y do player conforme o valor de speed
            this.y += this.speed
            this.animacao = "baixo"
            this.movimentando = true

        }

        for (let index = 0; index < objs.length; index++) { // iremos realizar um ciclo de repetição que pecorra todo os objetos

            const colisor = this.isCollided(objs[index]) // iremos receber um colisor levando em comparação do objeto

            if (colisor.collided) { // se a colisão ocorreu

                this.x = colisor.x // então a posição x do player será a mesma do colisor
                this.y = colisor.y // então a posição y do player será a mesma do colisor
                break; // então paramos o ciclo de repetição caso ocorra a colisão

            }

        }

    }

    render() { // função responsavel 

        // dizemos que o proximos elementos terão seu prenchimento pintado de preto
        ctx.fillStyle = "black"

        // dizemos que o proximos elementos terão sua fonte sendo 25px do formato ARIAL
        ctx.font = "25px ARIAL"

        // renderizamos um texto que nesse caso será da variável x do player
        ctx.fillText("x: " + this.x.toFixed(2), this.x, this.y - this.height) // toFixed(2) só pra deixar ele mostar 2 casas depois da vírgula
        // renderizamos um texto que nesse caso será da variável y do player
        ctx.fillText("y: " + this.y.toFixed(2), this.x, this.y - (this.height / 2)) // toFixed(2) só pra deixar ele mostar 2 casas depois da vírgula

        if (this.animacao == "default" || this.sprites.index >= 2 || !this.movimentando) {

            this.sprites.index = 0

        } else {

            this.sprites.index++

        }

        const sprite = this.sprites[this.nome][this.animacao][this.sprites.index]

        const inversao = this.direita ? -1 : 1

        ctx.scale(inversao , 1)

        ctx.drawImage(img, sprite.x, sprite.y, sprite.width, sprite.height, this.x * inversao, this.y, this.width * inversao, this.height)

    }

}
