const array = [
    {x: 'foo', y:8},
    {x: 'bar', y:3},
    {x: 'baz', y:7}

];

const foo = array.reduce((a,b) => ({
    ...a,
    [b.x]:b.y
}),
{}
)

console.log(foo)