/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
let salesDays = [];
let salesTotal = 0;

for (i = 1; i <= 7; i++) {
    salesDays[i - 1] = prompt("Enter your sales total for day " + i + ": ");
    salesDays[i - 1] = Number(salesDays[i - 1]);
}

for (i = 0; i < 7; i++) {
    salesTotal += salesDays[i];
}

let salesAverage = calcAve(salesTotal);

salesDays.sort();
let salesMax = salesDays[0];
let salesMin = salesDays[6];

document.write("Highest daily sales: " + salesMax + "<br>Lowest daily sales: " + salesMin + "<br>Average daily sales: " + salesAverage + "<br>Total weekly sales:" + salesTotal);

function calcAve(total) {
    return (total / 7);
}
