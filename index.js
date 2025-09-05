// Task 1
function addNumbers(a, b) {
  return a + b;
}

const sum = addNumbers(5, 7) // const change from result to sum
console.log(sum);

// Task 2
function calculateArea(width, height) {
  return width * height;
}

const rectangleWidth = 5;
const rectangleHeight = 10;
const area = calculateArea(rectangleWidth, rectangleHeight);
console.log(`The area of the rectangle is: ${area}`);

// Task 3
function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet('Alice');
// greet(personName); error personName is not defined (reference errror)

// Task 4
const numbers = [1, 2, 3, 4, 5];

function doubleArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] *= 2;
  }
}

doubleArray(numbers);
console.log(numbers);
//console.log(nonExistentVariable); ReferenceError: nonExistentVariable is not defined

// Task 5

function sumNumbers(a, b) {
    return a + b;
  }
  
  const num1 = 5;
  const num2 = '2';
  const result = sumNumbers(num1, num2);
  console.log(result);

// Task 6

function multiply(a, b) {
    return a * b;
  }
  
  const answer = multiply(5, '2');     //const change from result to answer
  console.log(answer);

//  Task 7
const students = [
    { name: 'Alice', age: 20 },
    { name: 'Bob', age: 22 },
    { name: 'Charlie', age: 18 },
  ];
    console.log(students) //adding console will give result



  // Task 8 // detected reference error and object error
const studentList = [{name: "Alice", age: 20},{name: "Bob", age: 22},{name: "Charlie", age: 18}]

  function calculateAverageAge(studentList) {
    let totalAge = 0;
  
    for (let i = 0; i < studentList.length; i++) {
      totalAge += studentList[i].age;
    }
  
    return totalAge / studentList.length;
  }
  
  const averageAge = calculateAverageAge(studentList);
  console.log(averageAge);


  