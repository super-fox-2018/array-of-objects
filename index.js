'use strict'

var arr = []

var createObj = (name,phase,gender) => {
    arr.push({'name':name,'phase':phase,'gender':gender,})
}

createObj('Akbar',1,'male')
createObj('Icha',1,'female')
createObj('Adhit',2,'male')
createObj('Tama',2,'male')
createObj('Rifky',3,'male')

console.log(arr)

var getData = name => {
    for(var i = 0; i < arr.length; i++){
        if(name == arr[i]['name']){
            return arr[i]
        }
    }
    return 'no result'
}


console.log(getData('Icha'))