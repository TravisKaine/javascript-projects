// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.addEventListener("load", function() {

    let altitude = 0
    let rocketPosX = 0
    let rocketPosY = 0

    const takeoffButton= document.getElementById('takeoff');
    const landButton = document.getElementById('landing');
    const abortButton = document.getElementById('missionAbort');

    const flightStatus = document.getElementById('flightStatus');
    const shuttleBackground = document.getElementById('shuttleBackground');
    const spaceShuttleHeight = document.getElementById('spaceShuttleHeight');

    const rocket = document.getElementById('rocket');

    takeoffButton.addEventListener("click", function() {
        let shouldTakeOff = confirm("Comfirm that the shuttle is ready for takeoff.");
        
        if (shouldTakeOff) {
            flightStatus.innerHTML = "Shuttle in flight!"
            shuttleBackground.style.backgroundColor= "blue"
            altitude = 10000
            spaceShuttleHeight.innerHTML = altitude
        }
    });

    landButton.addEventListener("click",function() {
        alert("The shuttle is landing. Landing gear engaged.")
            flightStatus.innerHTML = "The shuttle has landed."
            shuttleBackground.style.backgroundColor= "green"
            altitude = 0;
            spaceShuttleHeight.innerHTML = altitude;
            rocketPosX = 0
            rocketPosY = 0
            rocket.style.marginLeft = rocketPosX + 'px'
            rocket.style.marginBottom = rocketPosY + 'px'

    })

    abortButton.addEventListener("click", function(){
        let shouldabort = confirm("Comfirm that you want to abort the mission.");
    
        if (shouldabort) {
            flightStatus.innerHTML = "Mission aborted"
            shuttleBackground.style.backgroundColor= "green"
            altitude = 0
            spaceShuttleHeight.innerHTML = altitude
            rocketPosX = 0
            rocketPosY = 0
            rocket.style.marginLeft = rocketPosX + 'px'
            rocket.style.marginBottom = rocketPosY + 'px'
        }
    });


    document,this.addEventListener("click", function(event){
        let bkgWidth = parseInt(window.getComputedStyle(shuttleBackground).getPropertyValue('width'))

        if (event.target.id == "left" && rocketPosX > -(bkgWidth / 2 -40)) {
            rocketPosX -= 10;
            rocket.style.marginLeft = rocketPosX + 'px'
        }

        if (event.target.id == "right" && rocketPosX < (bkgWidth / 2 -40)) {
            rocketPosX += 10;
            rocket.style.marginLeft = rocketPosX + 'px'
        }

        if (event.target.id == "up" && altitude < 250000) {
            rocketPosY += 10;
            rocket.style.marginBottom = rocketPosY + 'px'
            altitude += 10000;
            spaceShuttleHeight.innerHTML = altitude
        }

        if (event.target.id == "down" && altitude > 0) {
            rocketPosY -= 10;
            rocket.style.marginBottom = rocketPosY + 'px'
            altitude -= 10000;
            spaceShuttleHeight.innerHTML = altitude
        }

    });


});