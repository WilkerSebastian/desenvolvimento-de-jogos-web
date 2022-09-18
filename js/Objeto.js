/*
    Objeto será uma classe pai para os elementos do jogo 
    comosa player , inimigos , chao , paredes , teto
*/
class Objeto {

    constructor(x , y , width , height) { // construtor com os atributos que a classe terá

        this.x = x // x representa a posição x no plano carteziano
        this.y = y // y representa a posição y no plano carteziano
        this.width = width // width será a largura do objeto 
        this.height = height // height será a altura do objeto

    }

    update() { // função responsavel pela logica do objeto



    }

    render(cor) { // função responsavel 

        ctx.fillStyle = cor // definimos que a cor de renderização será a cor que recebemos como parâmetro
        ctx.fillRect(this.x , this.y , this.width , this.height) // vamos renderizar um quadrado com os parâmetros do objeto

    }

}