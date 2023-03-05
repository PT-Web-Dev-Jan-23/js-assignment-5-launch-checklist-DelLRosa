// Write your JavaScript code here!

// const { formSubmission } = require("./scriptHelper");

// const { validateInput } = require("./scriptHelper");

window.addEventListener("load", function() {
let launchForm= document.getElementById("launchForm");
launchForm.addEventListener("submit", function(event){
    event.preventDefault();
    let pilotNameInput=document.querySelector("input[name=pilotName]");
    let copilotNameInput=document.querySelector("input[name=copilotName]");
    let fuelLevelInput=document.querySelector("input[name=fuelLevel]");
    let cargoMassInput= document.querySelector("input[name=cargoMass]");

    // if (pilotNameInput.value===""||copilotNameInput.value===""
    //     ||fuelLevelInput.value===""||cargoMassInput.value===""){
    // alert("All fields are required");
    // }
    validateInput(pilotNameInput.value);
    validateInput(copilotNameInput.value);
    validateInput(fuelLevelInput.value);
    validateInput(cargoMassInput.value);
});













   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse;
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
   })
   
});