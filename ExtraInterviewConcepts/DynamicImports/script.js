// import User, {printUser} from "./user";

// import User, { printUser } from './user.js'


import('./user.js').then(({default: User, printUser}) => {
    // console.log(module)
    const user = new User('Kyle', 'Cook')
    
    printUser(user)
})