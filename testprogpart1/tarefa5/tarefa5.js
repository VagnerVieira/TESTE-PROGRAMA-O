const cars = [
    {id: 1,nome:  "BMW M3" , montadora:"BMW"},  
    {id: 2,nome: "Honda Civic" , montadora:"Honda"}, 
    {id: 3,nome: "Honda Accord", montadora:"Honda"},
    {id: 4,nome: "Audi A3" , montadora:"Audi"},  
    {id: 5,nome: "Audi A4" , montadora:"Audi"},  
    {id: 6,nome: "Audi A5" , montadora:"Audi"},
    {id: 7,nome: "Tesla Model 3", montadora:"Tesla"},
    ]
const years = [
    {id: 1, ano:2000},  
    {id: 2, ano:2005}, 
    {id: 3, ano:2010},
    {id: 4, ano:2015},  
    {id: 5, ano:2020},  
    {id: 6, ano:2022},
    {id: 7, ano:2009},
]
/*function mergeArrays(){
    const teste = Object.assign(cars, year)
}
*/
const mergeArrays = cars.map(car => {
    const year = years.find(c => c.id === car.id);
    return year ? { ...car, ...year } : car;
  }).concat(years.filter(year => !cars.some(car => car.id === year.id)));
  
  console.log(mergeArrays);
  