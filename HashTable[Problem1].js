//Google Question
//Given an array = [2, 5, 1, 2, 3, 5, 1, 2, 4]

function firstRecurringCharacter(input) {
   for(let i = 0; i < input.length; i++) {
        for (let j = i + 1; j < input.length; j++) {
            if(input[i] === input[j]) {
                return input[i];
            }
        }
   }
   return undefined;
}

let ans = firstRecurringCharacter([5, 1, 3, 1, 2, 4])
//O[n^2]

function option2(input) {
    let map = {};
    for(let i = 0; i < input.length; i++) {
        if(map[input[i]] !== undefined) {
            return input[i]
        } else {
            map[input[i]] = i;
        }
    }
    console.log(map)
    return undefined;
}
// O(n)

let ans2 = option2([2,5,1,2,3,5,1,2,4])


//3rd approach (O(n) time, O(n) space)


function approach3(input) {
    let seen = new Set();
    for(let i = 0; i < input.length; i++){
        if(seen.has(input[i])) {
            return input[i];
        } else {
            seen.add(input[i])
        }
    }
    return undefined;
}

//let ans3 = approach3([2,5,1,2,3,5,1,2,4])

console.log("ans3===============>", ans3)

