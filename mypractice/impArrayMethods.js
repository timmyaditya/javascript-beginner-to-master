const arr = [10,20,3,40,50,60,70,80,90,100];

// foreach
// arr.forEach((ele)=>{
//     console.log(ele);
// });

// map
const newArray = arr.map((ele)=>{
    return ele*ele;
})

// newArray.forEach(function(ele){
//     console.log(ele);
// })

//filter
const even = function(num){
   return num%2===0;
}
const evenNums = arr.filter(even);

// for(let x of evenNums){
//     console.log(x);
// }

// reduce

const val = arr.reduce((accumulator, currValue)=>{
    return accumulator = accumulator+currValue;
},100);

// console.log(val);

//sort
arr.sort((a,b)=>{
    return b-a;
})
// console.log(arr);


//find
console.log(arr.find((ele)=>{
    return ele%2!==0;
}));

//every
console.log(arr.every((ele)=>{
    return ele%2===0;
}));

//fill
const newArr = new Array(10);
newArr.fill(new Array());
console.log(newArr)


