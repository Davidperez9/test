class bascula {
    constructor() {
      this.altura = []
      this.peso = []
      this.fechas = []
      this.anotaciones = 0
    }

    ObtenerNumeroAnotaciones() {
        return this.anotaciones;
    }

    AnotarPeso(peso,altura,fecha) {
        this.peso.push(peso)
        bascula.anotaciones = bascula.anotaciones + 1
        this.altura.push(altura);
        this.fecha.push(fecha);
    }
 
    ObtenerPesoMaximo(PesoMax) {
        
        return Math.max(...bascula.peso)
        
    }

    ObtenerPesoMin(PesoMin) {
        
        return Math.min(...bascula.peso)

    }


    ObtenerPesoMedio(Pesomedio) {
        lista = bascula.peso
       
            var i = 0, summ = 0, ArrayLen = lista.length;
            while (i < ArrayLen) {
                summ = summ + lista[i++];
        }  
        
        return summ;

    


    }
const arr = pesado1.peso;
const reducer = (accumulator, curr) => accumulator + curr;
arr.reduce(reducer);








    CalcularIMC(peso, altura) {
        this.PesoMax = PesoMax;
        var indice = (peso / Math.pow(altura, 2));
        var resultado = "";
    }










  }

------------------------------------------------------

class bascula {
    constructor() {
      this.altura = []
      this.peso = []
      this.fechas = []
      this.anotaciones = 0
    }

AnotarPeso(peso,altura,fecha) {
        this.peso.push(peso)
        pesado1.anotaciones = pesado1.anotaciones + 1
        this.altura.push(altura);
        this.fechas.push(fecha);
}
ObtenerNumeroAnotaciones() {
        return this.anotaciones;
}
  
ObtenerPesoMaximo() {
        
        return Math.max(...pesado1.peso);
        
    }
  
ObtenerPesoMin(PesoMin) {
        
        return Math.min(...pesado1.peso)

    }


ObtenerPesoMedio() {
const arr = pesado1.peso;
const reducer = (accumulator, curr) => accumulator + curr;
return arr.reduce(reducer) / pesado1.peso.lenght ;

}
    
        
      
 
  
  
  
  
 
}

pesado1 = new bascula()
pesado1.AnotarPeso(22,12,12)
pesado1.ObtenerNumeroAnotaciones()
pesado1.AnotarPeso(23,12)
pesado1.AnotarPeso(25,12)
console.log(pesado1.peso)
console.log(pesado1.anotaciones)
console.log(pesado1.altura)
console.log(pesado1.ObtenerPesoMaximo())
console.log(pesado1.ObtenerPesoMedio())
console.log(pesado1.ObtenerPesoMin())





https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push