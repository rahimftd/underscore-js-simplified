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

//Reduce

function reduce(arr, reduceFunc, memo) {
	if (arr.length > 0 && memo !== undefined) {
		return reduce(arr.slice(1), reduceFunc, reduceFunc(memo, arr[0]))
	} else if (arr.length > 0) {
		return reduce(arr.slice(1), reduceFunc, arr[0])
	} else {
		return memo;
	}
}

//Placeholder: reduceRight

//Find

function find(arr, predicate) {
	for (var i = 0; i < arr.length; i++) {
		if(predicate(arr[i])) {
			return arr[i];
		}
	}
	return undefined;
}

//Filter

function filter(arr, predicate) {
	var filterArr = [];

	for (var i = 0; i < arr.length; i++) {
		if(predicate(arr[i])) {
			filterArr.push(arr[i]);
		}
	}
	
	return filterArr;
}

//Where- return all values that match the key value pairs in properties

function where (arr, properties) {
	
	var subArr = arr;

	for (var i = 0; i < subArr.length; i++) {
		for (var key in properties) {
			if(subArr[i][key] != properties[key]){
				subArr.splice(i,1);
				i--;
				break;
			}
		}
	}
	return subArr;
}

//findWhere- returns first elements that matches all key value pairs

function findWhere (arr, properties) {
	return where(arr, properties)[0];
}

//Reject - opposite of filter. returns values that don't pass the predicate.

function reject(arr, predicate) {
	var filterArr = [];

	for (var i = 0; i < arr.length; i++) {
		if(!predicate(arr[i])) {
			filterArr.push(arr[i]);
		}
	}
	
	return filterArr;
}



