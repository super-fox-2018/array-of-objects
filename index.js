var arr = [];

function createObj(name, phase, gender){
  var obj = {
      name: name,
      phase: phase,
      gender: gender
    };

  arr.push(obj);
  return arr;
}

createObj("Akbar", 1, "male");
createObj("Icha", 2, "female");
createObj("Louis", 4, "male");
createObj("Louise", 2, "female");

console.log(arr);

function getData(name){
  for(var i = 0; i < arr.length; i++){
    if(arr[i].name === name){
      return arr[i];
    }
  }
  return "Invalid entry"
}

console.log(getData("Icha"));
