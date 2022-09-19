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
    constructor(x, y, width, height) {

        super(x, y, width, height)

    }

    movimento(evento) { // função responsável por mover o player, recebendo como parâmetro uma tecla 

        /* 
        
            move é um objeto literal que armazena as teclas que se presionadas
            írão mover o player no eixo x ou y 
        
        */
        const move = {

            x: { // movimento do exio x

                "a": this.x - 5, // "a" será a posição x do player menos 5
                "d": this.x + 5 // "d" será a posição x do player mais 5

            },
            y: { // movimento do eixo y

                "w": this.y - 5, // "w" será a posição y do player menos 5
                "s": this.y + 5 // "s" será a posição y do player mais 5

            }

        }

        /* 
        
            dizemos que a posição x do player, caso ele tenha teclado uma telca que está 
            nas teclas do eixo x do objeto literal move, caso não será a posição atual
        
        */
        this.x = move.x[evento] ?? this.x

        /* 
        
            dizemos que a posição y do player, caso ele tenha teclado uma telca que está 
            nas teclas do eixo y do objeto literal move, caso não será a posição atual
        
        */
        this.y = move.y[evento] ?? this.y

        /* EXEMPLO

            player tem:
            x = 5
            y = 20
        
            se movimento receber como paramêtro "d"

            player terá:
            x = 5 + 5
            y = 20

            se movimento receber como paramêtro "w"

            player terá:
            x = 5
            y = 20 - 5

            se movimento receber como paramêtro "g"
            
            player terá:
            x = 5
            y = 20
        
        */

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
