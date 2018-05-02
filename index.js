var arr = [];
function createObj(name, phase, gender) {
  //Your code here
  let obj = {};
  obj['name'] = name;
  obj['phase'] = phase;
  obj['gender'] = gender;

  arr.push(obj);
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Budi', 2, 'male');
createObj('Zola', 4, 'female');

console.log(arr);

function getData(name) {
  //Your code here
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].name === name) {
      return arr[i];
    }
  }

  return -1;
}

console.log(getData('Icha'));
console.log(getData('Gabriel Reyes')); // -1
