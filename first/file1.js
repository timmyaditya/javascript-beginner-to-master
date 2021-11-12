const obj1 = {
    "one":1,
    "two":2,
    "three":3,
    "four":4,
    "six":6
}
console.log(obj1);
console.log(typeof obj1);

obj1.one = 100;
console.log(obj1)

obj1["four"] = 4;
console.log(obj1);

obj1.five = 5;
console.log(obj1);

obj1.arr = ["one", "two", "three", "four"];
console.log(obj1);

let arr = obj1.arr;
console.log(arr);
arr.push("six");

for(let temp in arr){ 
    console.log(obj1[arr[temp]]);
}

for(let key in obj1){
    console.log(`${key}: ${obj1[key]}`)
}

let myarr = [1,2,3,4,5,6];
let num = 10;

console.log(find(myarr, num));

function find(arr, num){
    for(let x in arr){
        if(arr[x]===num){
            return true;
        }
    }
    return false;
}

