//Transforms an array based on the "iteratee" function provided

function map(numArr, iteratee) {
	for (var i = 0; i < numArr.length; i++) {
		numArr[i] = iteratee(numArr[i]);
	}
	return numArr;
}