var arr = [];

function createObj(name, phase, gender) {
  var obj = {};

  obj.name = name;
  obj.phase = phase;
  obj.gender = gender;

  arr.push(obj);

  return arr;
}
createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');

console.log(arr);

function getData(name) {
  for (let i = 0; i < arr.length; i++) {
    for (let j in arr[i]) {
      if (arr[i][j] === name) {
        return arr[i];
      }
    }
  }
}
console.log(getData('Icha'));
