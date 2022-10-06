class Fundo extends Objeto {

    constructor(x , y , width , height) { 

        super(x , y , width , height , false)
        this.yCorte = 2000

    }

    update() {

        if (this.yCorte < 0) {

            this.yCorte = 2000
            
        } else {

            this.yCorte -= 3

        }

    }

    render() {

        ctx.drawImage(imagens["oceano"] , 0 , this.yCorte , 1920 , 1000 , this.x , this.y , this.width , this.height)

    }

}