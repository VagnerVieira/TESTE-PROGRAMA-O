async function fetchUserData(){
    const users = await fetch ('https://jsonplaceholder.typicode.com/users').then((res)=> res.json())
    console.log(users)
    
}

    fetchUserData()

/*
async function showUserNames() {
    
    const user = await fetchUserData()

    console.log(`O nome do Usuário é:`)
}
`https://jsonplaceholder.typicode.com/users`
*/
