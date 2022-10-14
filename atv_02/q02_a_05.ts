class Pessoa {
    _nome: string;
    _sobrenome: string;
    
    constructor(nome: string, sobrenome: string) {
        this._nome = nome;
        this._sobrenome = sobrenome;
    }

    get nome() {
        return this._nome;
    }

    get sobrenome() {
        return this._sobrenome;
    }

    get nomeCompleto() {
        return (`${this._nome}  ${this._sobrenome}`);
    }
    
}


class Funcionario extends Pessoa {
    _matricula: string
    _salario: number

    constructor(nome: string, sobrenome: string, matricula: string, salario: number) {

        if (salario < 0) {
            throw new Error("Valor Inválido");
        }

        super(nome, sobrenome);
        this._matricula = matricula;
        this._salario = salario;
    }

    get matricula() {
        return this._matricula;
    }

    get salario() {
        return this._salario;
    }

    calcularSalarioPrimeiraParcela() {
        var primeiraParcela = this._salario * 0.6

        return primeiraParcela
    }

    calcularSalarioSegundaParcela() {
        var segundaParcela = this._salario * 0.4

        return segundaParcela
    }

}


class Professor extends Funcionario {
    _titulacao: string

    constructor(nome: string, sobrenome: string, matricula: string, salario: number, titulacao: string) {
        super(nome, sobrenome, matricula, salario);
        this._titulacao = titulacao;
    }

    get titulacao() {
        return this._titulacao;
    }

    calcularSalarioPrimeiraParcela(): number {
        var valorIntegral = this._salario

        return valorIntegral
    }

    calcularSalarioSegundaParcela(): number {

        return 0
    }
}


let pessoa = new Pessoa("Aegon", "Targaryen");
let funcionario = new Funcionario("Eivor", "Varinsdottir", "855", 1000);
let professor = new Professor("Edward", "Kenway ", "1715", 2000, "Mestre");


console.log("------------- 2 questão -------------");
console.log(pessoa.nomeCompleto);

console.log("------------- 3 questão -------------");
console.log(funcionario.calcularSalarioPrimeiraParcela());
console.log(funcionario.calcularSalarioSegundaParcela());

console.log("------------- 4 questão -------------");
console.log(professor.calcularSalarioPrimeiraParcela());
console.log(professor.calcularSalarioSegundaParcela());
