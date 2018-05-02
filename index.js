var arr = []

function createObj(name, phase, gender) { 

    var data={}
    data.name=name
    data.phase=phase
    data.gender=gender

    arr.push(data)

}

createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
createObj('Adhit', 2, 'male')
createObj('Tama', 2, 'male')
createObj('Rifky', 3, 'male')

console.log(arr)