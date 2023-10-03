// DECLARING VARIABLES
// let is mutable
let age = 10;

// const cannot be modified
const myName = "Joseph"

// DATATYPES
const num = 1234.343;
const string = "Joseph"; // or 'Joseph'
const boolean = true || false;

// NULLABILITY
const nullValue = null;
const undefinedValue = undefined;

// BOOLEANS
console.log(!!"")
console.log(!!"Hello, world");
console.log(!!0)
console.log(!!123)
console.log(!![])
console.log(!!{})
console.log(!!true)
console.log(!!false)
console.log(!!null)
console.log(!!undefined)

if ("") {
  console.log("Expression is truthy")
} else {
  console.log("Expression is falsey")
}

if ("" === false) {
  console.log("I am truthy")
}

// ARRAYS

const data = [1,2,3,4,5,6];
data.push(1)
data.pop()
data.shift()
data.unshift(3)
console.log(data.length)

for(let i = 0; i < data.length; i++) {
  console.log(data[i]);
}

for(let value of data) {
  console.log(value);
}

// OBJECTS

const obj = {
  key1: "Some value",
  key2: 234987,
  key3: {
    key: 1,
  }
}

obj.key1 = "Some other value";

function func(arg1, arg2) {
  return arg1 + arg2;
}

const result = func(12, 23)

console.log(result);

const myFunc2 = () => {

}

data.forEach((value) => {
  console.log(value * 2);
})

const array1 = [1,2,3,4,5];
const array1Copy = [...array1];
const array2 = [6,7,8,...array1,9,10, ];
console.log(array2);

const user = {
  name: "Joseph",
  age: 30,
};

const otherUser = {
  name: "Catelyn",
  age: 20,
};

const newUser = {
  ...otherUser,
  ...user,
}
