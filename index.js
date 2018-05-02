var arr = []
function createObj(name, phase, gender){
var object = {
  'name' : name,
  'phase' : phase,
  'gender' : gender,
};

arr.push(object);
}

createObj('Akbar', 1, 'Male');
createObj('Icha', 1, 'Female');
createObj('Adit', 2, 'Male');
createObj('Tama', 2, 'Male');

console.log(arr);

function getData(name){
  for (var i = 0; i < arr.length; i++) {
    if(arr[i].name === name){
      return arr[i];
    }
  }
}

console.log(getData('Tama'));
