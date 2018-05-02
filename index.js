var arr = [];

function createObj(name, phase, gender){
    var obj = {}
    obj.name = name;
    obj.phase = phase;
    obj.phase = gender;
    arr.push(obj)
}

createObj('akbar', 1, 'male' );
createObj('Icha', 1, 'female' );
console.log(arr);

function getData(name){
    for(let a=0; a<=arr.length-1; a++){
        for(key in arr[a]){
            if(arr[a][key]==='Icha'){
                return arr[a];
            }
        }
    }
}

console.log(getData('Icha'))