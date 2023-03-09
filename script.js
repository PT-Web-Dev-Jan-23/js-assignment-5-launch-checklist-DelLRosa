// Write your JavaScript code here!

// const { addDestinationInfo } = require("./scriptHelper");

// const { pickPlanet } = require("./scriptHelper");

// const { pickPlanet } = require("./scriptHelper");

// const { myFetch } = require("./scriptHelper");

// const { myFetch } = require("./scriptHelper");

window.addEventListener("load", function() {
let launchForm= document.getElementById("launchForm");
launchForm.addEventListener("submit", function(event){
    event.preventDefault();
    let pilotNameInput=document.querySelector("input[name=pilotName]");
    let copilotNameInput=document.querySelector("input[name=copilotName]");
    let fuelLevelInput=document.querySelector("input[name=fuelLevel]");
    let cargoMassInput= document.querySelector("input[name=cargoMass]");

    let pilot=pilotNameInput.value;
    let copilot=copilotNameInput.value;
    let fuelLevel=fuelLevelInput.value;
    let cargoMass=cargoMassInput.value;
    let list=document.getElementById("faultyItems");
    
    // console.log(pilot,copilot,fuelLevel,cargoMass);
    formSubmission(document,list,pilot,copilot,fuelLevel,cargoMass);
});


   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse=myFetch();
   console.log(listedPlanetsResponse);

   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let destination=pickPlanet(listedPlanets);
       addDestinationInfo(document,destination.name,destination.diameter,destination.star,destination.distance,destination.moons,destination.image);

   })
   
});