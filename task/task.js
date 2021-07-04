console.log('task')


let users = [
    {
        name: 'krishna',
        number: 9642688248
    },
    {
        name: 'krishna chaitanya',
        number: 9642688248
    },
    {
        name: 'bhargav',
        number: 123
    },
    {
        name: 'venky',
        number: 322
    },
    {
        name: 'murty bhargav',
        number: 98989
    }
]

function addUser(user) {
    return users.push(user)
}

function deleteUser(name) {
    let findIndex = users.findIndex(a => a.name === name)
    findIndex !== -1 && users.splice(findIndex , 1)
    console.log(users)
}

function editUser(user) {
    users = users.map((item) => (item.name === user.name) ? {...item, name: 'Aashmi'}: item)
    console.log(users);
}

function searchUsers(name) {
    return users.filter((item) => item.name.includes(name))
}

console.log(users)

addUser({name: 'aashmi', number: 007})
deleteUser('venky')
editUser({name: 'aashmi', number: 007})

console.log(searchUsers('bhargav'))
console.log(users)
