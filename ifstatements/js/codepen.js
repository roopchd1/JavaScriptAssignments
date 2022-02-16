let textHolder = document.querySelector("p"); //get the element

let hour = new Date().getHours(); //get hour

if (hour >= 8 && hour < 11) { 
  textHolder.innerHTML = "School Time!";
} else if (hour => 11 && hour <= 11.30) { 
  textHolder.innerHTML = "It is lunch time";
} else if (hour > 11.30 && hour <= 14) { 
  textHolder.innerHTML = "School time";
} else if (hour >= 14 && hour <= 16) { 
  textHolder.innerHTML = "Off from school and at home";
} else if (hour >= 17 && hour <= 19) { 
  textHolder.innerHTML = "Language Class";  
} else if (hour > 19 && hour <= 20) { 
  textHolder.innerHTML = "It is dinner time";
} else if (hour > 20 && hour <= 22) { 
  textHolder.innerHTML = "It is snack time";
}
else {
  textHolder.innerHTML = "Goodnight";
}