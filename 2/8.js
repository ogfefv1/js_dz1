let circleLength = parseFloat(prompt("Напишите длину окружности:"));
let squarePerimeter = parseFloat(prompt("Напишите периметр квадрата:"));

if
 (circleLength <= 0 || squarePerimeter <= 0)
  {
    alert("Ошибка");
}
 else
  {
    const radius = circleLength / (2 * Math.PI); 
    const side = squarePerimeter / 4; 

    if
     (radius * 2 <= side)
      {
        alert("Окружность поместится в квадрат");
    }
     else
      {
        alert("Окружность не поместится в квадрат");
    }
}