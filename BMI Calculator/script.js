
let submit = document.getElementById("submit");
let result = document.getElementById("result");


submit.addEventListener("click", function () {
    // dont change page
    event.preventDefault();
    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;
    // convert height in cm to m
    height = height / 100;
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);
    result.style.color="red";
    if (bmi < 18.5) {
        condition = "Underweight";
    }
    else if (bmi >= 18.5 && bmi <= 24.9) {
        condition = "Normal";
        result.style.color="#3EC70B";
    }
    else if (bmi >= 25 && bmi <= 29.9) {
        condition = "Overweight";
        result.style.color="yellow";
    }
    else condition = "Obese";
    result.innerHTML = `Your BMI is : ${bmi} <br>
    <br>You are : ${condition}`;
}
)