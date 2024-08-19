
const usuarios= [
    {id: 1, name: 'João', age: 20, isActive:true},
    {id: 2, name: 'Caio', age: 15, isActive:false},
    {id: 3, name: 'Bernardo', age: 30, isActive:false},
    {id: 4, name: 'Felipe', age: 48, isActive:true},
    {id: 5, name: 'Vagner', age: 26, isActive:true},
    {id: 6, name: 'Layla', age: 25, isActive:true},
    {id: 7, name: 'Bianca', age: 43, isActive:false},
    {id: 8, name: 'Rafaela', age: 17, isActive:true},
    {id: 9, name: 'Edivania', age: 51, isActive:true},
    {id: 10, name: 'Flavia', age: 20, isActive:false}
];



const usersActive = usuarios.filter((user)=> {
   return user.isActive === true
});



usersActive.sort(function(a,b){
    if(a.name < b.name){
        return-1;
    } else{
        return true
    }
})
console.log(usersActive)
