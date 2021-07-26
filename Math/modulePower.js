function solve(a,b,m){
    if(b===0) return 1
    if(b % 2 === 0) {
        return solve((a*a)%m,b/2,m)
    } else {
        return (a * solve((a*a)%m, (b-1)/2,m) % 11)
    }
}

console.log(solve(3,20,11));