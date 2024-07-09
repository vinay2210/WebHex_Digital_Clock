function Clock() {
  var monthNames = ["January", "February", "March", "April", "May", "June", 
                    "July", "August", "September", "October", "November", "December"];
  var dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  var today = new Date();

  var dateStr = dayNames[today.getDay()] + " " + today.getDate() + " " + monthNames[today.getMonth()] + " " + today.getFullYear();
  document.getElementById('Date').innerHTML = dateStr;

  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  var period = h >= 12 ? 'PM' : 'AM'; // Determine AM or PM correctly

  h = h % 12 || 12;  // Convert hour to 12-hour format
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  document.getElementById('Hour').innerHTML = h;
  document.getElementById('Min').innerHTML = m;
  document.getElementById('sec').innerHTML = s;
  document.getElementById('period').innerHTML = period;  // Assuming you have an element with id='period' for AM/PM
}

// Update the clock every second (1000 milliseconds)
var inter = setInterval(Clock, 1000);
