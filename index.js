var arr = []

function createObj(name, phase, gender) {
  var obj = {
    name: name,
    phase: phase,
    gender: gender
  }
  arr.push(obj)
}

function getData(name) {
var getName =''
for (var i = 0; i < arr.length; i++) {
  if (arr[i].name === name) {
    getName = arr[i]
  }
}
return getName;
}


createObj('Akbar', 1, 'male')
createObj('Icha', 1, 'female')
console.log(getData('Icha'));
