function about(a, b){
    console.log(this.fname, this.age, a, b);
}

const user1 = {
    fname : "aditya",
    age : 21,
}

const user2 = {
    fname : "timmy",
    age:18,
}

about.apply(user1,[10,20]);
about.apply(user2,[10,20]);

about.call(user1, "one", "two")

const fun = about.bind(user1, "one", "two")
fun();-
console.log(fun);
