//Write your code here!

function timeToDecimal(time){
  var timeArray = time.split(":");
  var decimalTime = parseInt(timeArray[0]) + (parseInt(timeArray[1])/60) + (parseInt(timeArray[2])/3600);
  decimalTime = Math.round(decimalTime*10000)/10000
  return decimalTime;
  //Need to round decimalTime to 4 decimal places
}

function decimalToTime(decimalTime){
  var newTime = []
  newTime[0] = Math.floor(decimalTime)
  newTime[1] = Math.floor((decimalTime * 60) % 60)
  newTime[2] = Math.round(decimalTime*3600 - (newTime[0]*3600 + newTime[1]*60))
  var stringTime = [String(newTime[0]).padStart(2).replace(" ", "0"), String(newTime[1]).padStart(2).replace(" ", "0"), String(newTime[2]).padStart(2).replace(" ", "0")]
  //need to format single digit numbers with two digits ie "01"
  return stringTime.join(":")

}

function paceToMarathonTime(pace){
  var decimalPace = timeToDecimal(pace)
  var decimalMarathon = decimalPace * 26.2
  var finalMarathon = decimalToTime(decimalMarathon)
  return "Expected marathon time " + finalMarathon
}

function marathonToPacePerMile(marathonTime){
  var decimalMarathonTime = timeToDecimal(marathonTime)
  var decimalPaceTime = decimalMarathonTime/26.2
  var finalPaceTime = decimalToTime(decimalPaceTime)
  return "Pace time " + finalPaceTime.replace("00:","")
}
