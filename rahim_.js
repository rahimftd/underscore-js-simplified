//Transforms an array based on the "iteratee" function provided

function each(Arr, iteratee) {
	for (var i = 0; i < Arr.length; i++) {
		Arr[i] = iteratee(numArr[i]);
	}
}

//Similar to each, but creates a new array
function map(Arr, iteratee) {
	var newArr = Arr.slice(0);
	each(newArr, iteratee);
	return newArr;
}