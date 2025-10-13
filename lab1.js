let str = "the quick brown fox";
let result
.split(" ")
.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
.join(" ");
console.log(result);


let num = ['1000', '510', '440'];
let largest = Math.max(...num);
console.log("The largest number is: " + largest);


let str1 = "Python";
if (str1.length >= 3) {
  let result = str1.slice(-3) + str1.slice(0, -3);
  console.log(result);
} else {
  console.log("String length must be at least 3 characters.");
}


let angle = 120;  // change this value to test different angles
if (angle > 0 && angle < 90) {
  console.log("Acute angle");
} else if (angle === 90) {
  console.log("Right angle");
} else if (angle > 90 && angle < 180) {
  console.log("Obtuse angle");
} else if (angle === 180) {
  console.log("Straight angle");
} else {
  console.log("Angle must be between 0 and 180 degrees.");
}
