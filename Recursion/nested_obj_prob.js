let user = {
    name: 'JOHN',
    address: {
      personal: {
        city: 'Hyderabad',
        area: 'Hitech'
      },
      office: {
        city: 'Delhi',
        area: {
          landmark: 'KarolBagh'
          }
      }
    }
  }

let finalObj = {}

let recFunc = (obj, parentName) => {
    for(let key in obj) {
        if(typeof obj[key] == 'object'){
            recFunc(obj[key], parentName + '_' + key)
    } else {
        finalObj[parentName + '_' + key] = obj[key]
    }
}
}


recFunc(user, 'user')