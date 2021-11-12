// object destructuring
const obj = {
    key1: "value1",
    key2: "value2",
    key3: "value3",
    key4: "value4",
    key5: "value5"
}

function fun1({key1, key2, ...arguments}){
    console.log(key1+key2);
    console.log(arguments);
}


fun1(obj);

let arr = ["apple", "orange", "banana"];

let [one, two, ...three] = arr;
console.log(one, two, three);