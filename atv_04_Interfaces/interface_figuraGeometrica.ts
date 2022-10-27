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
    
    area(): number {
        var valorArea = this.base * this.altura;

        return valorArea;
    }

    perimetro(): number {
        var valorPerimetro = this.base * 4

        return valorPerimetro
    }

    comparar(formaGeometrica: Calculos): number {
        var areaBase = this.area()
        var areaComparada = formaGeometrica.area(5,5)
        
        if (areaBase > areaComparada) {
            return 1
        } else if (areaBase == areaComparada) {
            return 0
        } else {
            return -1
        }
    }
}


class Retangulo implements Calculos,IComparavel {
    base: number;
    altura: number
    
    constructor(b: number,  h: number) {
        this.base = b
        this.altura = h
    }


    area(): number {
        var valorArea = this.base * this.altura;

        return valorArea;
    }

    perimetro(): number {
        var valorPerimetro = (this.base + this.altura) * 2

        return valorPerimetro
    }

    comparar(formaGeometrica: Calculos): number {   
        var areaBase = this.area()
        var areaComparada = formaGeometrica.area(5,5)
        
        if (areaBase > areaComparada) {
            return 1
        } else if (areaBase == areaComparada) {
            return 0
        } else {
            return -1
        }
    }
}


class Triangulo implements Calculos,IComparavel {
    base: number;
    altura: number
    
    constructor(b: number,  h: number) {
        this.base = b
        this.altura = h
    }

    
    area(): number {
        var valorArea = (this.base * this.altura) / 2;
        
        return valorArea;
    }
    
    perimetro(): number {
        var valorPerimetro = this.base * 3
        
        return valorPerimetro
    }

    comparar(formaGeometrica: Calculos): number {
        var areaBase = this.area()
        var areaComparada = formaGeometrica.area(5,5)
        
        if (areaBase > areaComparada) {
            return 1
        } else if (areaBase == areaComparada) {
            return 0
        } else {
            return -1
        }
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

        console.log(`Comparação Quadrado com Retangulo: ${quadrado.comparar(retangulo)}`)
        console.log(`Comparação Quadrado com Triangulo: ${quadrado.comparar(triangulo)}`)
        console.log(`Comparação Retangulo com Triangulo: ${retangulo.comparar(triangulo)}`)
    }
}


let testando = new teste
testando.testes()
