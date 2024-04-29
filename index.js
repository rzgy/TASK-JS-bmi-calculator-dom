function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let convertedHeight = height / 100;
  let calculateBMI = weight / convertedHeight ** 2;
  alert(calculateBMI);

  if (calculateBMI < 18.5) {
    alert("Underweight");
  } else if (18.5 < calculateBMI > 24.9) {
    alert("Healthy Weight");
  } else if (25 < calculateBMI > 29.9) {
    alert("Overweight");
  } else if (calculateBMI > 30) {
    alert("Obese");
  }
}
