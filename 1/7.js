let flashDriveSizeGB = parseFloat(prompt("Напишите объем флешки в Гб: "));
const fileSizeMB = 820;

let flashDriveSizeMB = flashDriveSizeGB * 1024;

if
(flashDriveSizeGB > 0)
{
     alert(`Количество файлов размером в 820мб : ${Math.floor(flashDriveSizeMB / fileSizeMB)}`);
}
else
 {
    alert("Ошибка: Напишите положительное число для объема флешки.");
}