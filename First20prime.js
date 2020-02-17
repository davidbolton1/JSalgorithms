// Filter the first 20 prime numbers
let somearray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
let primeArray = somearray.filter((number) => {
	//for (var i = 2; i <= 20; i ++) {
	for (var i = 2; i <= Math.sqrt(number); i++) {
		if (number % i === 0) return false;
	}
	return true;
});

console.log(primeArray);

let testarray = () => {
	let myarray = [];
	for (var i = 2; i < 100; i++) {
		for (var i = 2; i <= Math.sqrt(i); i++) {
			if (i % i === 0) return false;
		}
		myarray.push(i);
    }
    console.log(myarray)
    return myarray;
};

testarray();
