/*
    Objeto será uma classe pai para os elementos do jogo 
    comosa player , inimigos , chao , paredes , teto
*/
class Objeto {

    constructor(x , y , width , height , collisional) { // construtor com os atributos que a classe terá

        this.x = x // x representa a posição x no plano carteziano
        this.y = y // y representa a posição y no plano carteziano
        this.width = width // width será a largura do objeto 
        this.height = height // height será a altura do objeto
        this.collisional = collisional

    }

    update() { // função responsavel pela logica do objeto



    }

    isCollided(obj) {

        const colisor = {

            collided: false,
            x: this.x,
            y: this.y

        }

        if (!obj.collisional) {

            return colisor
            
        }

        const distanciaX = (this.x + this.width/2) - (obj.x + obj.width/2);
		const distanciaY = (this.y + this.height/2) - (obj.y + obj.height/2);
		
		const sumWidth = (this.width + obj.width)/2;
		const sumHeight = (this.height + obj.height)/2;

        console.log("distancia x: " + distanciaX);
        console.log("distancia y: " + distanciaY);
        console.log("soma largura: " + sumWidth);
        console.log("soma altura: " + sumHeight);
		
		if(Math.abs(distanciaX) < sumWidth && Math.abs(distanciaY) < sumHeight){

            colisor.collided = true

			const overX = sumWidth - Math.abs(distanciaX);
			const overY = sumHeight - Math.abs(distanciaY);

            console.log("overX: " + overX);
            console.log("overY: " + overY);
			
			if(overX > overY){

				colisor.y = distanciaY > 0 ? this.y + overY: this.y - overY;

			} else {

				colisor.x = distanciaX > 0 ? this.x + overX : this.x - overX;

			}
		}

        return colisor

    }

    render(cor) { // função responsavel 

        ctx.fillStyle = cor // definimos que a cor de renderização será a cor que recebemos como parâmetro
        ctx.fillRect(this.x , this.y , this.width , this.height) // vamos renderizar um quadrado com os parâmetros do objeto

        ctx.fillText(this.collisional ? "possui colisão" : "não posssui colisão" , this.width + this.x / 1.5, this.y - 25)

    }

}