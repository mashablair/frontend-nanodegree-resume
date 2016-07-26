//bio object - basic info
var bio = {
    "name": "Maria Blair",
    "role": "Front-End Web Developer",
    //object:
    "contact info" {
        "email": "mashablair@gmail.com",
        "cell": "805-636-6461",
        "github": "mashablair",
        "location": "Santa Barbara, CA",
        "twitter": "mashablair"
    },
    //end of object
    "picture": "images/fry.jpg",
    "welcome message": "Hello and welcome to my online resume site!  My name is Maria and I am learning to code.  This is my first JavaScript project: an interactive online resume that is easy to customize.",
    "skills": [
        "programming", "HTML", "CSS", "JavaScript", "Bootstrap", "Sublime Text"
    ],
};

// $("#main").append("Maria Blair");
// this will test if things are working

// function that displays info from the bio object on the page:
bio.displays = function() {

// Basic header info - name, title, contact info, image

};

var name = "Maria Blair";
var role = "Front-End Web Developer";

var formattedName = HTMLheaderName.replace("%data%", name);
var formattedRole = HTMLheaderRole.replace("%data%", role);


$("#header").append(formattedName);
$("#header").append(formattedRole);




var formattedPic = HTMLbioPic.replace("%data%", picture);
$("#main").append(bio);

