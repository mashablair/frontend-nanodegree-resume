//bio object - basic info
var bio = {
    "name": "Maria Blair",
    "role": "Front-End Web Developer",
    "contact info" {
        "email": "mashablair@gmail.com",
        "cell": "805-636-6461",
        "github": "mashablair",
        "location": "Santa Barbara, CA",
        "twitter": "mashablair"
    },
    "pic": "images/fry.jpg",
    "welcome message": "Hello and welcome to my online resume site!  My name is Maria and I am learning to code.  This is my first JavaScript project: an interactive online resume that is easy to customize.",
    "skills": ["programming", "HTML", "CSS", "JavaScript", "Bootstrap", "jQuery"],
};

// function that displays info from the bio object on the page:
bio.display = function() {

// Basic header info - name, title, image
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedPic = HTMLbioPic.replace("%data%", bio.pic);
    $("#header").append(formattedPic);
};

