// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
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

   } else if (validateInput(copilot)==="Is a number"||validateInput(pilot)==="Is a number"||
      validateInput(fuelLevel)==="Is not a number"||validateInput(cargoLevel)==="Is not a number"){
      alert("Make sure to enter valid input into each field!");
   }

      let copilotStatus=document.getElementById("copilotStatus");
      let pilotStatus=document.getElementById("pilotStatus");
      let launchStatus= document.getElementById("launchStatus");
      let fuelStatus=document.getElementById("fuelStatus");
      let cargoStatus=document.getElementById("cargoStatus");

      copilotStatus.innerHTML=`Co-pilot ${copilot} is Ready`;
      pilotStatus.innerHTML=`Pilot ${pilot} is Ready`;
      
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

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
