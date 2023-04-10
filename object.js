/*
Insert, Remove, Access - O(n)
Serach - O(n)
Object.keys() - O(n)
Object.values() - O(n)
Object.entries() - 0(n)
*/
const obj = {
    name: "Boryana",
    age: 23,
    "key-three": true,
    sayMyName: function () {
        console.log(this.name);
    }
}

obj.hobby = "bouldering";
delete obj.hobby;

console.log(obj.name);
console.log(obj['age']);
console.log(obj['key-three']);
console.log(obj);
obj.sayMyName();

//Object.keys() .value() .entries()