
class SpriteSheet extends Objeto{

   
    constructor(x, y, width, height, collisional , nome) {

        super(x , y , width , height , collisional)
        this.nome = nome
        this.sprites = { 

            "bf109": [ 

                {x: 0, y: 0, width: 161, height: 156},
                {x: 161, y: 0, width: 161, height: 156},
                {x: 322, y: 0, width: 161, height: 156}

            ],
            "spitfire": [

                {x: 0, y: 0, width: 161, height: 156},
                {x: 161, y: 0, width: 161, height: 156},
                {x: 322, y: 0, width: 161, height: 156}

            ],
            "tiro": [

                {x: 0, y: 0, width: 7, height: 6},
                {x: 7, y: 0, width: 6, height: 6},
                {x: 14, y: 0, width: 7, height: 6}

            ],
            index: 0 

        }

    }

    render() {

        const frameRate =  parseInt(1000 / limiteFPS) / 100 

        
        if (this.sprites.index >= 2) {

            this.sprites.index = 0  

        } else { 

            this.sprites.index += frameRate 

        }
        
        const index = Number.isInteger(this.sprites.index) ? this.sprites.index : parseInt(this.sprites.index.toString())

        const sprite = this.sprites[this.nome][index]
       
        ctx.drawImage(imagens[this.nome], sprite.x, sprite.y, sprite.width, sprite.height, this.x, this.y, this.width, this.height)

    }

}