// Initialize Variables below
<<<<<<< HEAD
 let date = 'Monday 2019-03-18';
 let time = '10:05:34 am'
 let astronautCount = 7
 let astronautStatus = ready;
 let averageAstronautMassKg = 80.7
 
 
=======
    let data = 'Monday 2019-03-18';
    let time = '10:05:34 am';
    let astronautCount = 7;
    let astronautStatus = "ready";
    let averageAstronautMassKg = 80.7
    let crewMassKg = astronautCount * averageAstronautMassKg;
    let fuelMassKg = 760000;
    let shuttleMassKg = 74842.31;
    let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
    let maximumMassLimit = 850000
    let fuelTempCelsius = -225
    let minimumFuelTemp = -300
    let maximumFuelTemp = -150
    let fuelLevel = '100%';
    let weatherStatus = 'clear'
    let preparedForLiftOff = true;

>>>>>>> 4e7bb7ee05417e60f954edeb70d8a5aa4488ff3f
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
    if (astronautCount >= 7){
        console.log("Clear for Launch")
    } else if(astronautStatus === "ready"){
        console.log("Clear for Launch")
    } else if(maximumMassLimit <= 850000){
        console.log("Clear for Launch")
    } else if(minimumFuelTemp >= -300 && maximumFuelTemp <= -150){
        console.log("Clear for Launch")
    } else if(fuelLevel === '100%'){
        console.log("Clear for Launch")
    } else if(weatherStatus === 'clear'){
        console.log("Clear for Launch")
    } else{
        console.log("Fail To Launch")
    }
// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify all astronauts are ready

// add logic below to verify the total mass does not exceed the maximum limit of 850000

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

// add logic below to verify the fuel level is at 100%

// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions
