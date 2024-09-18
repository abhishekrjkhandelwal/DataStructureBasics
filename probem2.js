//Common Items

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['a', 'y', 'v'];

function containsCommonItem(arr1, arr2) {
    for(let i=0; i < arr1.length; i++) {
        for(let j=0; j < arr2.length; j++) {
            if(arr1[i] == arr2[j]) {
                return true;
            }
        }
    }
    return false;
}

// O(a*b)
// O(1) - Space Complexity

//let ans = containsCommonItem(array1, array2)

//console.log("ans============>", ans)

function containsCommonItem2(arr1, arr2) {
    let map = {};
    for(let i = 0; i < arr1.length; i++) {
        if(!map[i]) {
            const item = array1[i];
            map[item] = true;
        }
    }
    console.log(map)

    for(let j = 0; j < arr2.length; j++) {
        if(map[array2[j]]) {
            return true;
        }
    }
    return false;
}

// O(a + b) Time Complexity - Good In terms of time complexity
// O(a) - Space Complexity - Good In terms of Space complexity

//let ans = containsCommonItem2(array1, array2)

//console.log("ans=============>42", ans)


function containsCommonItem3(arr1, arr2) {
  return arr1.some(item => arr2.includes(item))
}

let ans3 = containsCommonItem3(array1, array2)

console.log("ans3============+>", ans3)