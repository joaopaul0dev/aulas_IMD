class Computador {
    public processador: string;
    public memoria: number;
  
    constructor(processador: string, memoria: number) {
      this.processador = processador;
      this.memoria = memoria;
    }
  }
  
  class Laptop extends Computador {
    public bateria_watts: number = 0; 
  
    constructor(processador: string, memoria: number, bateria_watts?: number) {
      super(processador, memoria);
      if (typeof bateria_watts === 'number') {
        this.bateria_watts = bateria_watts;
      }
    }
  }
  
  class Desktop extends Computador {
    public cabine: string = ""; 
  
    constructor(processador: string, memoria: number, cabine?: string) {
      super(processador, memoria);
      if (typeof cabine === 'string') {
        this.cabine = cabine;
      }
    }
  }
  
  
  const meuLaptop = new Laptop("Intel i5", 16, 54);
  console.log(meuLaptop); 
  
  const laptopPadrao = new Laptop("AMD Ryzen", 8);
  console.log(laptopPadrao); 
  
  const meuDesktop = new Desktop("Intel i9", 32, "Cooler Master");
  console.log(meuDesktop); 
  
  const desktopPadrao = new Desktop("Apple M2", 64);
  console.log(desktopPadrao); 