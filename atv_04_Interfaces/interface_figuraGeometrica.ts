interface Calculos {
    area(base: number, altura: number): number
    perimetro(base: number, altura: number) : number
}

interface IComparavel {
    comparar(formaGeometrica: Calculos) : number
    
}


class Quadrado implements Calculos,IComparavel {
    base: number;
    altura: number
    
    constructor(b: number,  h: number) {
        this.base = b
        this.altura = h
    }
    comparar(formaGeometrica: Calculos): number {
        throw new Error("Method not implemented.");
    }
    
    area(): number {
        var valorArea = this.base * this.altura;

        return valorArea;
    }

    perimetro(): number {
        var valorPerimetro = this.base * 4

        return valorPerimetro
    }
}


class Retangulo implements Calculos,IComparavel {
    base: number;
    altura: number
    
    constructor(b: number,  h: number) {
        this.base = b
        this.altura = h
    }
    comparar(formaGeometrica: Calculos): number {
        throw new Error("Method not implemented.");
    }

    area(): number {
        var valorArea = this.base * this.altura;

        return valorArea;
    }

    perimetro(): number {
        var valorPerimetro = (this.base + this.altura) * 2

        return valorPerimetro
    }
}


class Triangulo implements Calculos,IComparavel {
    base: number;
    altura: number
    
    constructor(b: number,  h: number) {
        this.base = b
        this.altura = h
    }
    comparar(formaGeometrica: Calculos): number {
        throw new Error("Method not implemented.");
    }

    area(): number {
        var valorArea = (this.base * this.altura) / 2;

        return valorArea;
    }

    perimetro(): number {
        var valorPerimetro = this.base * 3

        return valorPerimetro
    }
}

class teste {
    testes() {
        let quadrado = new Quadrado(5, 5);
        let retangulo = new Retangulo(5, 10);
        let triangulo = new Triangulo(10, 15);

        console.log(`Area do Quadrado: ${quadrado.area()}`)
        console.log(`Perimetro do Quadrado: ${quadrado.perimetro()}`)
        console.log(`Area do Retangulo: ${retangulo.area()}`)
        console.log(`Perimetro do Retangulo: ${retangulo.perimetro()}`)
        console.log(`Area do Triangulo: ${triangulo.area()}`)
        console.log(`Perimetro do Triangulo: ${triangulo.perimetro()}`)
    }
}


let testando = new teste
testando.testes()