// / Give an array of string,use fuctions to reverse all elements in string in ascending order and the specific elements ni descending order


const   array = ["Alice","Jane","Home","School"]
const reversed = [...array].reverse()
console.log(reversed)
console.log(reversed)

// Using js fuctions and an array of Number,return positive if an element within an array is positiveve,negative if an element is negative ,else zero

var numbers = [1,2,3,4]
var number
if (numbers===positive){
    number= positive;

}else if(numbers===negative){
    number= negative
}else{
    number = zero
}
//3
let employee = [
    { id: 1 },
    { name: "Scarlet" },
    { salary: [2000, 5000, 3000, 4000] },
  ];
    employee.sort(function(a, b) {
    return a.salary - (b.salary);
  });
  employee.forEach((person) => console.log(employee.salary));
 console.log(employee);



//4
function multiply(numbers) {
numbers.forEach((number) => {
   console.log(number * 2);
});
}
multiply([2, 7, 6, 8]);
//5


function changeArray2(arr) {
const firstFour = arr.slice(0, 4).map(item => item * 8);
const lastTwo = arr.slice(-2).map(item => item + 5);
const newArr = firstFour.concat(lastTwo);
console.log(newArr);
}
changeArray2([27, 30, 50, 50, 70]);