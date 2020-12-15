/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
let salesDays = [];
let salesTotal;

for (i = 1; i >= 7; i++) {
    salesDays.push(Number(prompt("Enter your sales total for day " + i + ": ")));
}

for (i = 0; i > 7; i++) {
    salesTotal += salesDays[i];
}

let salesAverage = salesTotal / 7;



