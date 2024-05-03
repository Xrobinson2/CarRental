

"use strict";

//button
const estimateBtn = document.getElementById("estimateBtn")
//button

//input
const inputOptElectronicTollCheckbox = document.getElementById("inputOptElectronicTollCheckbox")
const inputOptGPSCheckbox = document.getElementById("inputOptGPSCheckbox")
const inputOptRoadAssitanceCheckbox = document.getElementById("inputOptRoadAssitanceCheckbox")
const isElectronicToll = document.getElementById("isElectronicToll")
const isGPS = document.getElementById("isGPS")
const isRoadAssitance = document.getElementById("isRoadAssitance")




window.onload = function (){
    estimateBtn.onclick = onEstimateBtn
}


function onEstimateBtn()  {
 
  let numOfDays = Number(inputNumOfDays.value);

let isElectronicToll = inputOptElectronicTollCheckbox.checked
let isGPS = inputOptGPSCheckbox.checked
let isRoadAssitance = inputOptRoadAssitanceCheckbox.checked
  
let isunder25 = inputunder25YesRadio.checked
 
let outputCarRental

const x = 29.99;
  const carRental = numOfDays.value * x;
  console.log(carRental);



}
