class Empregado {
    _salario = 500

    calcularSalario() {
        return this._salario
    }
}

class Diarista extends Empregado {
    _salarioDiarista = this._salario / 30

    calcularSalario() {
        return this._salarioDiarista
    }
}

class Horista extends Diarista {
    _salarioHorista = this._salario / 24

    calcularSalario() {
        return this._salarioHorista
    }
}

let empregado = new Empregado()
let diarista = new Diarista()
let horista = new Horista()

console.log(empregado.calcularSalario())
console.log(diarista.calcularSalario())
console.log(new Horista().calcularSalario())