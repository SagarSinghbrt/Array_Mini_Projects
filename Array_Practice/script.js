// const arr = [1, 2, 18, 4, 5];
// let sumArr = 0;

// arr.forEach((a) => (sumArr += a));
// console.log(sumArr);

// arr.forEach((a) => {
// 	if (sumArr < a) {
// 		sumArr = a;
// 	}
// });

// console.log(sumArr);

// const animal = ["dog", "cow", "goat", "dear", "elephant", "lion", "tiger"];
// console.log(animal.includes("elephant"));

// const num = [2, 3, 4, 5, 6, 7, 8];
// let count = 0;

// num.forEach((n) => {
// 	if (n % 2 == 0) {
// 		count++;
// 	}
// });
// console.log(count);

// let data = [2, 4, 6, 8];
// let newData = [];

// data.forEach((n) => {
// 	newData.unshift(n);
// });

// console.log(newData);

// Raw Coding
// const arr = [1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8];
// const newarr = [];
// arr.forEach((n) => {
// 	if (!newarr.includes(n)) {
// 		newarr.push(n);
// 	} else {
// 		console.log("Already Exist", n);
// 	}
// });

// console.log(newarr);

// const arr = [1, 2, 2, 3, 4, 4, 5, 6, 7, 8, 8];
// let newarr = [...new Set(arr)];
// console.log(newarr);

// const arr1 = [3, 1, 2];
// const arr2 = [6, 5, 4];
// const mergarr = [...arr1, ...arr2].sort();
// console.log(mergarr);

// const arr = ["a", "b", "c", "a", "d", "a"];
// const newarr = [];
// let i = true;
// arr.forEach((n, index) => {
// 	if (newarr.includes(n)) {
// 		// console.log(n, index);
// 		if (i) {
// 			i = false;
// 			console.log(n, index);
// 		}
// 	} else {
// 		newarr.push(n);
// 	}
// });

// let arr = ["a", "b", "c", "a", "d", "a"];
// let item = "a";

// let index = arr.indexOf(item, arr.indexOf(item) + 1);

// console.log(index);

// const arr = [5, 10, 15, 20];
// let newarr = arr.filter((num) => num > 10);
// console.log(newarr);

// const arr = [1, [2, [3, 4]], 5];
// const newarr = arr.flat(Infinity);
// console.log(newarr);
