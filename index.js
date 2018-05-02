var arr=[]
function createObj(name,phase,gender){
  arr.push({ name: name, phase: phase, gender: gender})
  return arr
}
// console.log(arr)
createObj("Akbar",1,"male")
createObj("Icha",1,"female")
createObj("Adhit",2,"male")
createObj("Tama",2,"male")
createObj("Rifky",2,"male")
console.log(arr)

function getData(name){
  var array=createObj(arr)
  for (var i=0; i<array.length; i++){
    if(array[i].name === name){
      return array[i]
    }
  }
}
console.log(getData("Icha"))