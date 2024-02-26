// Initialize Variables below
    let data = 'Monday 2019-03-18';
    let time = '10:05:34 am';
    let astronautCount = 7;
    let astronautStatus = "ready";
    let averageAstronautMassKg = 80.7
    let crewMassKg = astronautCount * averageAstronautMassKg;
    let fuelMassKg = 760000;
    let shuttleMassKg = 74842.31;
    let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
    let maximumMassLimit = 850000;
    let fuelTempCelsius = -225;
    let minimumFuelTemp = -300;
    let maximumFuelTemp = -150;
    let fuelLevel = 100;
    let weatherStatus = 'clear';
    let preparedForLiftOff = true;

>>>>>>> 4e7bb7ee05417e60f954edeb70d8a5aa4488ff3f
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
    if(astronautCount <= 7){
        console.log("Astronauts loaded")
      }else{
        console.log("To many passangers on board")
    }
    if(astronautStatus = "ready"){
        console.log("Crew members ready")
      }else{
        console.log("Crew not ready")
    }
    if(totalMassKg <= maximumMassLimit){
        console.log(totalMassKg)
     }else{
        console.log("over max payload weight")
    }
    if(fuelTempCelsius >= minimumFuelTemp && fuelTempCelsius <= maximumFuelTemp){
        console.log("Engine temperatures level")
     }else if(fuelTempCelsius < minimumFuelTemp){
        console.log("Fuel temperature Low")
     }else if(fuelTempCelsius > maximumFuelTemp){
        console.log("Fuel temperature High")
    }    
    if(fuelLevel === 100){
        console.log("Fuel tank full")
     }else{
        console.log("Fuel levels low")
    }
    if(weatherStatus === 'clear'){
        console.log("Weather clear")
     }else{
        console.log("Postpone for weather")
    }
    if (astronautCount <= 7 && astronautStatus === "ready" && totalMassKg <= maximumMassLimit && fuelTempCelsius >= minimumFuelTemp && fuelTempCelsius <= maximumFuelTemp && fuelLevel === 100 && weatherStatus === 'clear'){
        console.log("Ready for Launch")
     }else{
        console.log("Do not engage in Launch")
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
