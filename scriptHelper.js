// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   let missionTarget=document.getElementById("missionTarget");
   // Here is the HTML formatting for our mission target div.
   missionTarget.innerHTML=`
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${imageUrl}">
   `
}

function validateInput(testInput) { 
   // console.log(testInput);
   let output=''; 
   if (testInput===""){
      output="Empty";
      // console.log(output);
      return output;
   } else if (isNaN(testInput)===true){
      output="Is not a number";
      // console.log(output);
      return output;
   } else if (isNaN(testInput)===false){
      output="Is a number";
      // console.log(output);
      return output;
   }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   //validate forms that are given 
   if(validateInput(pilot)==="Empty"||validateInput(copilot)==="Empty"
   ||validateInput(fuelLevel)==="Empty"||validateInput(cargoLevel)==="Empty"){
      alert("all fields required!");
      return;

   } else if (validateInput(copilot)==="Is a number"||validateInput(pilot)==="Is a number"||
      validateInput(fuelLevel)==="Is not a number"||validateInput(cargoLevel)==="Is not a number"){
      alert("Make sure to enter valid input into each field!");
      return;
   }

      let copilotStatus=document.getElementById("copilotStatus");
      let pilotStatus=document.getElementById("pilotStatus");
      let launchStatus= document.getElementById("launchStatus");
      let fuelStatus=document.getElementById("fuelStatus");
      let cargoStatus=document.getElementById("cargoStatus");

      copilotStatus.innerHTML=`Co-pilot ${copilot} is ready for launch`;
      pilotStatus.innerHTML=`Pilot ${pilot} is ready for launch`;

   //change box on bottom based on data in forms
   if (fuelLevel>10000 && cargoLevel<10000){
      launchStatus.style.color="green";
      launchStatus.innerHTML="Shuttle ready to launch";
      fuelStatus.innerHTML="Fuel level high enough to launch";
      cargoStatus.innerHTML="Cargo weight low enough to launch";
      list.style.visibility="visible";    
   } else if (fuelLevel<10000){
      launchStatus.style.color="red";
      launchStatus.innerHTML="Shuttle not ready to launch";
      fuelStatus.innerHTML="Fuel level too low to launch";
      cargoStatus.innerHTML="Cargo weight low enough to launch";
      list.style.visibility="visible";  
   } else if (cargoLevel>10000){
      launchStatus.style.color="red";
      launchStatus.innerHTML="Shuttle not ready to launch";
      fuelStatus.innerHTML="Fuel level high enough to launch";
      cargoStatus.innerHTML="Cargo weight too high to launch";
      list.style.visibility="visible";  
   } else {
      launchStatus.style.color="red";
      launchStatus.innerHTML="Shuttle ready to launch";
      fuelStatus.innerHTML="Fuel level too low to launch";
      cargoStatus.innerHTML="Cargo weight to high to launch";
      list.style.visibility="visible";  
   };

}

async function myFetch() {
    let planetsReturned;
   let url="https://handlers.education.launchcode.org/static/planets.json";
    planetsReturned = await fetch(url).then(function(response) {
      return response.json();
   });  

    return planetsReturned;
}

function pickPlanet(planets) {
   let index=Math.floor(Math.random()*6);
   // console.log(index);
   // console.log(planets[index]);
   return planets[index];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
