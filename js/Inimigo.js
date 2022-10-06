class Inimigo extends Player {

    constructor(x, y, width, height, speed, nome , vida) { 

        super(x, y, width, height, speed , nome , vida) 
        this.baixando = true

    }

    update() { 

        if (this.baixando) { 

            this.y += this.speed
            
            this.baixando = false
            setTimeout(() => this.baixando = true , 100)

        }

        if (this.podeAtirar) {

            this.atirar()
            
        }

        // this.vida = this.isCollided(player).collided ? 0 : this.vida

        // for (let index = 0; index < player.tiros.length; index++) { 

        //     if (this.isCollided(player.tiros[index]).collided) { 

        //         this.x = colisor.x 
        //         this.y = colisor.y 

        //         tiro.explodiu = true

        //     }

        // }

    }

    atirar() {

        if (this.podeAtirar) {
            
            this.tiros.push(new Tiro(this.x + this.width / 4,  this.y + this.height / 1.35, 16 , 16 , 10 , 15 , true))
            this.tiros.push(new Tiro(this.x + this.width / 1.5, this.y + this.height / 1.35 , 16 , 16 , 10 , 15 , true))

            this.podeAtirar = false
            setTimeout(() => this.podeAtirar = true , 500)

        } 

    }

}