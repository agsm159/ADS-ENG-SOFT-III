abstract class Funcionario {
    protected salario: number;

    constructor(salario: number) {
        this.salario = salario;
    }

    abstract getBonificacao(): number;
}

class Gerente extends Funcionario {
    constructor(salario: number) {
        super(salario);
    }
    
    getBonificacao(): number {
        var bonificacao = this.salario * 0.4;
        return this.salario + bonificacao;
    }
}

class Diretor extends Funcionario {
    constructor(salario: number) {
        super(salario);
    }
    
    getBonificacao(): number {
        var bonificacao = this.salario * 0.6;
        return this.salario + bonificacao;
    }
}

class Presidente extends Funcionario {
    constructor(salario: number) {
        super(salario);
    }
    
    getBonificacao(): number {
        var bonificacao = this.salario;
        return (this.salario + bonificacao) + 1000;
    }
}


let gerente = new Gerente(1000);
let diretor = new Diretor(2000);
let presidente = new Presidente(3000);

console.log(gerente.getBonificacao());
console.log(diretor.getBonificacao());
console.log(presidente.getBonificacao());