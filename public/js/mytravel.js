console.log("connected");
var  username = prompt("what is yor good name",name);
document.getElementById("name").innerHTML=username.toUpperCase();

// day and date
var day;
switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
     day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
}

document.getElementById("day").innerHTML = day;
var d=new Date();
var s="AM";
if(d.getHours()>12){
var s="PM";
d.setHours(d.getHours()-12);
}
document.getElementById("time").innerHTML=  d.getHours()+" "+ ":" + d.getMinutes() + ":" + d.getSeconds() + " " +s;


///subscription button

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }










    