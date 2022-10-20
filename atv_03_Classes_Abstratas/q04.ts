abstract class FiguraGeometrica {
    protected base: number;
    protected altura: number;

    constructor(b: number, h: number) {
        this.base = b;
        this.altura = h;
    }
    
    abstract area(): number;
}

class Quadrado extends FiguraGeometrica {
    constructor(b: number,  h: number) {
        super(b, h);
    }

    area(): number {
        return this.base * this.altura;
    }
}


class Retangulo extends FiguraGeometrica {
    constructor(b: number, h: number) {
        super(b, h);
    }

    area(): number {
        var valorArea = this.base * this.altura;
        return valorArea;
    }
}

class Triangulo extends FiguraGeometrica {
    constructor(b: number, h: number) {
        super(b, h);
    }

    area(): number {
        var valorArea = (this.base * this.altura) / 2;
        return valorArea;
    }
}

let quadrado = new Quadrado(5, 5);
let retangulo = new Retangulo(5, 10);
let triangulo = new Triangulo(10, 15);

console.log(quadrado.area());
console.log(retangulo.area());
console.log(triangulo.area());