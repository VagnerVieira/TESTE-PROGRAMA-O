const cars = [
    {nome:  "BMW M3" , montadora:"BMW"},  
    {nome: "Honda Civic" , montadora:"Honda"}, 
    {nome: "Honda Accord", montadora:"Honda"},
    {nome: "Audi A3" , montadora:"Audi"},  
    {nome: "Audi A4" , montadora:"Audi"},  
    {nome: "Audi A5" , montadora:"Audi"},
    {nome: "Tesla Model 3", montadora:"Tesla"},
    ]

let group = {};
cars.forEach(cars => {
    const montadora = cars.montadora;
    if(!group[montadora]) group[montadora] = [];
    group[montadora].push(cars);
})   

console.log('Montadoras', group);