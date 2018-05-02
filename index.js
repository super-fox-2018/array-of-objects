const arr = [];

function createObj(name, phase, gender) {
  let obj = {};
  obj.name = name;
  obj.phase = phase;
  obj.gender = gender;
  arr.push(obj);
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifki', 3, 'male');

// console.log(arr);

function getData (name) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === name) {
      return arr[i]
    }
  }
  return 'Person does not exist'
}

//Test Cases
console.log(getData('Icha')) // { name: 'Icha', phase: 1, gender: 'female' }
console.log(getData('ab')) // Person does not exist
