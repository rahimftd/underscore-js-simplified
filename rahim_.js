//Transforms an array based on the "iteratee" function provided

function each(arr, iteratee) {
	for (var i = 0; i < arr.length; i++) {
		arr[i] = iteratee(numArr[i]);
	}
}

//Similar to each, but creates a new array
function map(arr, iteratee) {
	var newArr = arr.slice(0);
	each(newArr, iteratee);
	return newArr;
}

//Reduce function
function reduce(arr, reduceFunc, memo) {
	if (arr.length > 0 && memo !== undefined) {
		return reduce(arr.slice(1), reduceFunc, reduceFunc(memo, arr[0]))
	} else if (arr.length > 0) {
		return reduce(arr.slice(1), reduceFunc, arr[0])
	} else {
		return memo;
	}
}