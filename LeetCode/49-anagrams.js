function findAnagrams(strs) {
    console.log(strs)
    let cache = {}
    for(let str of strs) {
      let sortedKey = str.split('').sort().join('')
      if(cache[sortedKey]) {
        cache[sortedKey].push(str)
      } else {
          cache[sortedKey] = [str]
      }
    }
      console.log(cache)
   return Object.values(cache)
  }
  
  
  console.log(
  findAnagrams(['speed', 'seped', 'tea', 'ate', 'aet'])
  )


  // Way 2


function findAnagrams(strs) {
    console.log(strs)
    let cache = {}
    for(let str of strs) {
      let primes = [2,3,5,7,9,11,13,17,19,23,29, 31,37,41, 43, 47,53,59, 61,67, 71,73,79,83,89,97,101]
      let key = str.split('').reduce((total, char) => 
      total * primes[char.charCodeAt() -97]
      , 1)
      if(cache[key]) {
        cache[key].push(str)
      } else {
          cache[key] = [str]
      }
    }
      console.log(cache)
   return Object.values(cache)
  }

  // 3
  function groupTitles(strs) {
    var res = {}
    for(let str of strs) {
      // console.log(str)
      var count = new Array(26).fill(0)
      for(var c of str) {
        // console.log(c)
        const index = c.charCodeAt(0) - 'a'.charCodeAt(0)
        count[index] += 1
      }
        var key  = count;
        if(key in res) {
        res[key].push(str)
      } else {
        res[key] = [str]
      }   
        
    }
     var result = [];
    for (var key in res) {
        result.push(res[key]);
    }
    console.log(result)
    return result;
  }
  
  
  var titles = ["duel","dule","speed","spede","deul","cars"]
  var gt = groupTitles(titles)
  var query = "spede" 
  // console.log(gt)
  for (var [_, g] of Object.entries(gt)) {
    // console.log(g)
      if (g.includes(query)){
          console.log(g)
      }
  }