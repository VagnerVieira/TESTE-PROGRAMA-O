const contarOcorrencias = (objeto, elem) => {
    return objeto.reduce((contador, itemAtual)=> {
        return itemAtual == elem ? contador + 1 : contador;}, 0);
}

const cars = [ "Toyota Corolla",
    "Honda Accord",
    "Honda Civic",
    "Ford Mustang",
    "Honda Civic",
    "BMW M3",
    "Honda Civic",
    "Audi A4",
    "Ford Mustang",
    "Honda Accord",
    "Audi A4",
    "Ford Mustang",
    "Tesla Model 3",
    "Ford Mustang",
    ]

console.log("---------------------- "+" Contagem de Ocorrencias no Array de Carros " +" ----------------------")
console.log("Toyota Corolla: " +contarOcorrencias(cars, "Toyota Corolla"))
console.log("Honda Civic: " +contarOcorrencias(cars, "Honda Civic"))
console.log("Ford Mustang: " +contarOcorrencias(cars, "Ford Mustang"))
console.log("BMW M3: " +contarOcorrencias(cars, "BMW M3"))
console.log("Honda Accord: " +contarOcorrencias(cars, "Honda Accord"))
console.log("Tesla Model 3: " +contarOcorrencias(cars, "Tesla Model 3"))