function TimeToWalk(stepsNumber, stepsMetersHr, studentSpeed) {
    let distanceMeters = stepsNumber * stepsMetersHr;
    let timeMetersSec = studentSpeed / 3.6;
    let time = distanceMeters / timeMetersSec
    
    let rest = Math.floor(distanceMeters / 500)
    
    let min = Math.floor(time / 60) 
    let sec = Math.round(time - (min * 60))
    let hours = Math.floor(time / 3600)
    
    console.log((hours < 10 ? "0":"") + hours + ':' + (min < 10 ? '0':"") + (min+rest) + ':' + (sec < 10 ? '0':'')+  sec) 
  
  }

TimeToWalk(2564, 0.70, 5.5)