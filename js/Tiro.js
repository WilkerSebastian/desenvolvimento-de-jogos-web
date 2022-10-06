class Tiro extends SpriteSheet {

    constructor(x, y, width, height, speed , dano , desce) { 

        super(x, y, width, height, true, "tiro") 
        this.speed = speed
        this.dano = dano
        this.desce = desce

    }

    update() {

        if (this.sprites.index == 0) {

            setTimeout(() => this.sprites.index = 1 , 50)
            
        }

        if (this.sprites.index == 1) {
            
            this.y = this.desce ? this.y + this.speed : this.y - this.speed

        }

    }

    render() {

        const sprite = this.sprites[this.nome][this.sprites.index]
       
        ctx.drawImage(imagens[this.nome], sprite.x, sprite.y, sprite.width, sprite.height, this.x, this.y, this.width, this.height)

    }

}