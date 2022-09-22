class Conta {
	private _numero: String;
	private _saldo: number;

    constructor(numero: String, saldoInicial: number) {
		this._numero = numero;
		this.novoSaldo(saldoInicial);
		this._saldo = saldoInicial;
	}
	
	get numero(): String {
		return this._numero;
	}
	
	get saldo(): number {
		return this._saldo;
	}
	
	novoSaldo(valor: number): void {
		if(this._saldo <= 0) {
		throw new ValorInvalidoError('Deposito invalido')
		}
	}
	
	sacar(valor: number): void {
		this.novoSaldo(valor)
		if (this._saldo < valor) {
            throw new SaldoInsuficienteError('Saldo insuficiente')
        }

        this._saldo = this._saldo - valor
	}

	depositar(valor: number): void {

        this.novoSaldo(valor);
		this._saldo = this._saldo + valor;
	}

	transferir(contaDestino: Conta, valor: number): void {
		this.sacar(valor);
		contaDestino.depositar(valor);
	}
}

class Poupanca extends Conta {
	private _taxaJuros: number;

	constructor(numero: String, saldo: number, taxaJuros: number ) {
		super(numero, saldo);
		this._taxaJuros = taxaJuros;
	}

	public renderJuros(): void {
		this.depositar(this.saldo * this._taxaJuros/100);
	}

	get taxaJuros(): number {
		return this._taxaJuros
	}
}

class Banco {
	private _contas: Conta[] = [];
	
	inserir(conta: Conta): void {
        let contaConsultada = this.consultar(conta.numero);

        if (contaConsultada == null) {
		    this._contas.push(conta);
        }
	}

	consultar(numero: String): Conta {
		let contaConsultada!: Conta;
		for (let conta of this._contas) {
			if (conta.numero != numero) {
				throw new ContaInexistenteError('Conta nao encontrada!')
			}
            contaConsultada = conta;
		}
		return contaConsultada;
	}

	private consultarPorIndice(numero: String): number {
		let indice: number = -1;
		for (let i: number = 0; i < this._contas.length; i++) {
			if (this._contas[i].numero != numero) {
				throw new ContaInexistenteError('Conta nao encontrada!')
			}

            indice = i
		}
		return indice;
	}

	alterar(conta: Conta): void {
		let indice: number = this.consultarPorIndice(conta.numero);
		
		this._contas[indice] = conta;
		
	}

	excluir(numero: string): void {
		let indice: number = this.consultarPorIndice(numero);
		
		if (indice != -1) {
			for (let i: number = indice; i < this._contas.length; i++) {
				this._contas[i] = this._contas[i+1];
			}

			this._contas.pop();
		} 
	}

	depositar(numero: String, valor: number): void {
		let contaConsultada = this.consultar(numero);

		contaConsultada.depositar(valor);
	}

    sacar(numero: String, valor: number): void {
        let contaConsultada = this.consultar(numero);
        
        contaConsultada.sacar(valor); 
    }

    transferir(numeroDebito: string, numeroCredito: string, valor: number){
        let contaCredito: Conta = this.consultar(numeroCredito);
        let contaDebito: Conta = this.consultar(numeroDebito);

        contaDebito.transferir(contaCredito, valor);
    }

    calcularQuantidadeContas(): number {
        return this._contas.length;
    }

    calcularTotalSaldos(): number {
        let totalSaldo: number = 0;
        for (let conta of this._contas) {
            totalSaldo += conta.saldo;
        }

        return totalSaldo;
    }

    calcularMediaSaldos() {
        return this.calcularTotalSaldos()/this.calcularQuantidadeContas();
    }

    renderJuros(numero: String) {
		let contaConsultada = this.consultar(numero);
		let poupanca: Poupanca = <Poupanca> contaConsultada;

		if(poupanca != null) {
			poupanca.renderJuros();
		}
		
		throw new PoupancaInvalidaError('Poupanca Invalida')
	}
}

class AplicacaoError extends Error {
    
    constructor(message: string) {
        super(message)
    }
}

class ContaInexistenteError extends AplicacaoError {

    constructor(message: string) {
        super(message)
    }
}

class SaldoInsuficienteError extends AplicacaoError {

    constructor(message: string) {
        super(message)
    }
}

class ValorInvalidoError extends AplicacaoError {
    
    constructor(message: string) {
        super(message)
    }
}

class PoupancaInvalidaError extends Error {
	
	constructor(message: string) {
		super(message)
	}
}
