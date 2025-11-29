class Pet {
	nome: string;
	constructor(nome: string) {
		this.nome = nome;
	}
}

class Livro {
	nome: string;
	constructor(nome: string) {
		this.nome = nome;
	}
}

class Colecao<T> {
	private itens: T[] = [];

	adicionar(item: T): void {
		this.itens.push(item);
	}

	mostrarTodos(): void {
		for (const item of this.itens) {
			console.log(item);
		}
	}
}

// Exemplo de uso
const meusLivrosPrediletos = new Colecao<Livro>();
const animais = new Colecao<Pet>();
const dom_quixote = new Livro("Dom Quixote");
meusLivrosPrediletos.adicionar(dom_quixote);
const toto = new Pet("Totó");
animais.adicionar(toto);
meusLivrosPrediletos.mostrarTodos();
animais.mostrarTodos();

export { Pet, Livro, Colecao };

