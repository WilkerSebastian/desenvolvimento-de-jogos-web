
class Player extends SpriteSheet {

   
    constructor(x, y, width, height, speed, nome , vida) { 

        super(x, y, width, height, true, nome) 
        this.tiros = []
        this.speed = speed
        this.vida = vida
        this.podeAtirar = true

    }

    update() {

        if (keys.a) { 

            this.x -= this.speed 
            this.animacao = "esquerda" 
            this.movimentando = true 

        }
        if (keys.d) { 

            this.x += this.speed 
            this.animacao = "direita" 
            this.movimentando = true 

        }
        if (keys.w) { 

            this.y -= this.speed 
            this.animacao = "cima" 
            this.movimentando = true 

        }
        if (keys.s) { 

            this.y += this.speed 
            this.animacao = "baixo" 
            this.movimentando = true 

        }

        for (let index = 0; index < inimigos.length; index++) {

            if (this.isCollided(inimigos[index]).collided) {

                inimigos[index]

            } else {

                for (let i = 0; i < inimigos[index].tiros.length; i++) {

                    if(this.isCollided(inimigos[index].tiros[i]).collided) {

                        inimigos[index].tiros[i].index = 2
                        this.vida -= inimigos[index].tiros[i].dano

                        setTimeout(() => {

                            inimigosi[index].tiros.splice(index , 1)

                        } , 1500)
                

                    }
                    
                }

            }

        }

        for (let index = 0; index < this.tiros.length; index++) {
            
            if (saiuDoMundo(this.tiros[index])) {
             
                setTimeout(() => this.tiros.splice(index , 1), 100)

            }

        }

        console.log(this.tiros.length);

        this.vida = this.vida < 0 ? 0 : this.vida

    }

    atirar() {

        if (this.podeAtirar) {
            
            this.tiros.push(new Tiro(this.x + this.width / 4,  this.y + this.height / 4, 16 , 16 , 10 , 15 , false))
            this.tiros.push(new Tiro(this.x + this.width / 1.5, this.y + this.height / 4 , 16 , 16 , 10 , 15 , false))

            this.podeAtirar = false
            setTimeout(() => this.podeAtirar = true , 200)

        } 

    }

}
