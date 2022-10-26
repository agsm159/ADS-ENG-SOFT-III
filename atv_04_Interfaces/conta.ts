interface Tributavel {
    calculaTributo(): number    
}


class Conta {

    nome: string
    saldo: number

    constructor(nome: string, saldo: number) {
        this.nome = nome
        this.saldo = saldo
    }

    getNome(): string {
        return this.nome
    }

    setNome(nome: string) {
        this.nome = nome
    }

    getSaldo(): number {
        return this.saldo
    }

    setSaldo(saldo: number) {
        this.saldo = saldo
    }

}


class ContaCorrente extends Conta implements Tributavel {

    constructor(nome: string, saldo: number) {
        super(nome, saldo)
    }

    calculaTributo(): number {
        var tributo = this.saldo * 0.1

        return tributo
    }
}


class SeguroDeVida implements Tributavel {
    
    calculaTributo(): number {
        const tributo = 50

        return tributo
    }

}


class AuditoriaInterna {
    tributaveis: Tributavel[] = []

    adicionar(conta: Tributavel){
        this.tributaveis.push(conta)        
    }

    calcularTributos(): number {
        var total = 0

        for (var i = 0; i < this.tributaveis.length; i++) {
            total += this.tributaveis[i].calculaTributo()
        }

        return total
    }
}

class Testes {

    teste(){
        let audInt = new AuditoriaInterna()

        audInt.adicionar(new ContaCorrente("João", 1000))
        audInt.adicionar(new SeguroDeVida())
        audInt.adicionar(new ContaCorrente("Maria", 2000))
        audInt.adicionar(new SeguroDeVida())

        console.log(audInt.calcularTributos())
    }
}

let testando = new Testes
testando.teste()
