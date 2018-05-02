let array = [];

function createObj(name, phase, gender) {
  let stringParam = ['name', 'phase', 'gender'];
  let param = [name, phase, gender];
  let tempObj = new Object({});
  for (var i = 0; i < stringParam.length; i++) {
    tempObj[stringParam[i]] = param[i];
  }
  array.push(tempObj);
}

function getData(name) {
  for (var i = 0; i < array.length; i++) {
    if (array[i].name === name) {
      return array[i];
    }
  }
}

createObj('A', 1, 'male');
createObj('B', 2, 'female');

console.log(array);
console.log(getData('A'));
