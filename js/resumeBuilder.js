// $("#main").append("Maria Blair");

// var firstName = "Maria";
// var age = 35;
// var awesomeThoughts = "I am Maria and I am AWESOME! :)";
// console.log(firstName);
// console.log(age);
// console.log(awesomeThoughts);

// var fun = ("FUN");

// var funThoughts = awesomeThoughts.replace("AWESOME", fun);
// console.log(funThoughts);

// var sophieThoughts = "Sophie is AWESOME".replace("AWESOME", "adorable");
// console.log(sophieThoughts);

var name = "Maria Blair";
var role = "Front-End Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);


$("#header").append(formattedName);
$("#header").append(formattedRole);
