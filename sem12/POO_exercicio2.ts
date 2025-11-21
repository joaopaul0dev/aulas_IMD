        class estudante {
            readonly id: number;
            nome: string;
            private _credito: number;

            constructor(id:number,nome:string){
                this.id = id;
                this.nome = nome;
                this._credito = 1;
            }
            get credito(): Number {
                return this._credito
            }

            set credito(valor: number) {
                if(valor <= 0){
                    console.log("valor invalido")
                    this._credito = 1;
                }else{
                    this._credito = valor;
                }
            }

            detalhar(){
                console.log (`id: ${this.id}` + `nome: ${this.nome} ` + (`credito: ${this.credito}`))
            }
        }


            const estudante1 = new estudante(1, "João Paulo");
            const estudante2 = new estudante(3, "Maria Silva");
            
            estudante1.credito = 5;
            estudante2.credito = 1;


            estudante1.detalhar();
            estudante2.detalhar();

