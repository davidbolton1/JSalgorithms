// myarr = [1, 3, 5, 99, 6, 9]

// const bubbleSort = myarr => {

//     for (let i = myarr.length-1; i > 0; i--) {
//     for (let j = 0; j > i; j++) {
//         console.log(arr[j])
//         if (arr[j] > (arr[j +1])) {
//             let placeholder = arr[j]
//             console.log(placeholder)
//         }
        
//     }

//     }
// }

// bubbleSort(myarr)






// Write a function that takes 2 arguments, an array of numbers ordered least to greated
// A target sum
// Returns the two numbers in the array that add up to the target sum

//findNum ([0,1,5,8,11], 9)
// Returns [1,8]
newarr = [0,1,5,8,11]
target = 8

// const findNum = (newarr, target) => {
//     for (let i = 0; i < newarr.length; i++) {
//         for (let j = 0; j < newarr.length; j++) {
//             if (newarr[i] + newarr[j] === target) {
//                 let arrfinal = ([newarr[i], newarr[j]])
//                 console.log(arrfinal)
//                 return arrfinal

//             }
//         }
        
//     }
// }

//findNum(newarr, target)

const findNum = (newarr, target) => {
    var result = [];
    newarr.forEach((num, i) => {
        var diff = target - num;
        var j = newarr.indexOf(diff);
        if (j > -1 && j !== i) {
            result.push(i);
            result.push(j);
        }
    });
    return result;
}

console.log(findNum(newarr, target))