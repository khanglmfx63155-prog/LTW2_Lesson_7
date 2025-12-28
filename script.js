const name = prompt("Tên của bạn là gì?");
alert(
  "Health bot xin chào" +
    " " +
    name +
    "\n***********************************" +
    "\nChào mừng" +
    " " +
    name +
    " " +
    "đến với chúng tôi" +
    "\nChúng tôi sẽ kiểm tra sức khoẻ của bạn qua chỉ số(BMI) CÂN NẶNG và CHIỀU CAO của bạn!"
);
let height = prompt("Chiều cao của bạn là bao nhiêu cm?");
let weight = prompt("Cân nặng của bạn là bao nhiêu kg?");

height = Number(height);
weight = Number(weight);
let result = "";
var bmi = weight / ((height * height) / 10000);
if (bmi < 18.5) {
  result = "Chiều cao của bạn là : " + " " + height + " cm" +
  "\nCân nặng của bạn là : " + " " + weight + " kg" +
  "\n***********************************" +
    "\nKết quả:" +
    "\nChỉ số BMI của bạn là : " +
    " " +
    bmi.toFixed(2) +
    "\nBạn thuộc nhóm những người gầy";
}
if (bmi < 25 && bmi >= 18.5) {
  result = "Chiều cao của bạn là : " + " " + height + " cm" + 
  "\nCân nặng của bạn là :" + " " + weight + " kg" +
  "\n***********************************" +
    "\nKết quả:" +
    "\nChỉ số BMI của bạn là : " +
    " " +
    bmi.toFixed(2) +
    "\nBạn thuộc nhóm những người cân đối";
}
if (bmi < 30 && bmi >= 25) {
  result = "Chiều cao của bạn là : " + " " + height + " cm" +
  "\nCân nặng của bạn là : " + " " + weight + " kg" +
  "\n***********************************" +
    "\nKết quả:" +
    "\nChỉ số BMI của bạn là : " +
    " " +
    bmi.toFixed(2) +
    "\nBạn thuộc nhóm những người thừ cân";
}
if (bmi > 30) {
  result = "Chiều cao của bạn là : " + " " + height + " cm" + 
  "\nCân nặng của bạn là : " + " " + weight + " kg" +
  "\n***********************************" +
    "\nKết quả:" +
    "\nChỉ số BMI của bạn là : " +
    " " +
    bmi.toFixed(2) +
    "\nBạn thuộc nhóm những người béo phì";
}
alert(result);
