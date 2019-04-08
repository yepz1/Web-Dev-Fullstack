var numbers = [1, 2, 3, 4, 5];
var number = [1, 1, 1, 1, 1]

// === printReverse() ===
function printReverse (arr) {
    for (i = arr.length - 1; i != -1; i--) {
        console.log(arr[i]);
    }
}

// === isUniform() ===
function isUniform(arr) {
    for (i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]){
            return false;
        }
    }
    return true;
}

// === sumArray() ===
function sumArray(arr) {
    var result = 0;
    for (i = 0; i < arr.length; i++) {
        result += arr[i];
    }
    return result;
}

// === max() ===
function max(arr) {
    var max = arr[0]
    for (i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    return max;
}

// === internet code ===
// function arrayMax(arr) {
//     var len = arr.length, max = -Infinity;
//     while (len--) {
//         if (arr[len] > max) {
//             max = arr[len];
//         }
//     }
//     return max;
// };
