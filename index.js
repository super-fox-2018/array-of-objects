var arr=[]
function createObj(name,phase,gender) {
	var obj = {}
	obj.name = name
	obj.phase = phase
	obj.gender = gender

	arr.push(obj)
}


function getData(name) {
	for(var i=0;i<arr.length;i++) {
		if(arr[i].name == name) {
			return arr[i]
		}
	}
}

createObj('Akbar',1,"male");
createObj('Icha',1,"female");
createObj('Adhit',2,"male");

console.log(arr);
console.log(getData("Icha"))
console.log(getData("Adhit"))