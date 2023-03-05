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
   console.log(testInput);
   let output=''; 
   if (testInput===""){
      output="Empty";
      console.log(output);
      return output;
   } else if (isNaN(testInput)===true){
      output="Is not a number";
      console.log(output);
      return output;
   } else if (isNaN(testInput)===false){
      output="Is a number";
      console.log(output);
      return output;
   }
   
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   //validate forms that are given 
   //change box on bottom based on data in forms
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
