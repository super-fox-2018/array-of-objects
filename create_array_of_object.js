'use strict'

var arr = [];
function createObj(name, phase, gender) {
    let temp = {}
    if(temp.name == undefined) {
        temp.name = name;
    }
    if(temp.phase == undefined) {
        temp.phase = phase;
    }
    if(temp.gender == undefined) {
        temp.gender = gender;
    }
    
    arr.push(temp);
    temp = {}
}

createObj('Akbar', 1, 'male');
createObj('Icha', 1, 'female');
createObj('Adhit', 2, 'male');
createObj('Tama', 2, 'male');
createObj('Rifky', 3, 'male');

// console.log(arr);

function getData(name) {
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i].name == name) {
            return arr[i];
        }
    }
}

console.log(getData('Icha'))