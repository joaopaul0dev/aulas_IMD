class MesaDeJantar{

    material: string;
    lugares: number;
    preco: number;
   

    constructor(material:string, lugares?: number, preco?: number){
        this.material = material;

        if(lugares != undefined){
            this.lugares = lugares;
        }else{
            this.lugares = 4;
        }  

        if(preco != undefined){
            this.preco = preco;
        }else{
            this.preco = 0;
        }        
    }
    detalhar(){
       console.log(`Material: ${this.material}` + `Lugares: ${this.lugares} ` + (`Preço: ${this.preco}`));
    }
       
}
        const mesa1 = new MesaDeJantar("metal", 8,100)
        const mesa2 = new MesaDeJantar("madeira", 6)
        const mesa3 = new MesaDeJantar("vidro")

mesa1.detalhar();
mesa2.detalhar();
mesa3.detalhar();