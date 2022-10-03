class SpriteSheet extends Objeto{

    constructor(x, y, width, height, collisional , nome) {

        super(x , y , width , height , collisional)
        this.nome = nome
        this.animacao = "default"
        this.movimentando = false
        this.direita = false
        this.sprites = {

            "firered": {

                "baixo": [
                    { x: 0, y: 0, width: 15, height: 19 },
                    { x: 15, y: 0, width: 14, height: 19 },
                    { x: 29, y: 0, width: 15, height: 19 }
                ],

                "cima": [
                    { x: 0, y: 19, width: 15, height: 20 },
                    { x: 15, y: 19, width: 14, height: 20 },
                    { x: 29, y: 19, width: 15, height: 20 }
                ],

                "andar": [
                    { x: 0, y: 39, width: 14, height: 19 },
                    { x: 14, y: 39, width: 14, height: 19 },
                    { x: 28, y: 39, width: 16, height: 19 }
                ],
                "default": [{ x: 0, y: 39, width: 14, height: 19 }]

            },
            index: 0

        }

    }

    render() {

        if (this.animacao == "default" || this.sprites.index >= 2 || !this.movimentando) {

            this.sprites.index = 0

        } else {

            this.sprites.index++

        }

        const sprite = this.sprites[this.nome][this.animacao][this.sprites.index]

        const inversao = this.direita ? -1 : 1

        ctx.scale(inversao , 1)

        ctx.drawImage(img, sprite.x, sprite.y, sprite.width, sprite.height, this.x * inversao, this.y, this.width * inversao, this.height)

        ctx.scale(1 , 1)

    }

}