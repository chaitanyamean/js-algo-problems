



function cal(value) {
    const accumlator = value
    const obj = {
        add,
        sub,
        val
    }

    function add(num) {
        accumlator += num
        return obj
    }

    function sub(num) {
        accumlator -= num
        return obj
        
    }

    function val() {
        return accumlator
    }

    return obj
}

var result = cal(2)
.add(5)
.sub(4)
.val()


console.log(result)

// flattenn array
// ()()() problem
// reverse a string
// remove dup from array
// 