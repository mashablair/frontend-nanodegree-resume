//bio object - basic info
var bio = {
    "name": "Maria Blair",
    "role": "Front-End Web Developer",
    "contacts": {
        "email": "mashablair@gmail.com",
        "mobile": "777-777-7777",
        "github": "mashablair",
        "location": "Santa Barbara, CA",
        "twitter": "@mashablair"
    },
    "biopic": "images/masha.png",
    "welcomeMessage": "Hello and welcome to my online resume site!  My name is Maria and I am learning to code.  This is my first JavaScript project: an interactive online resume that is easy to customize.",
    "skills": ["Awesomeness", "HTML", "CSS", "JavaScript", "Front-End Web Development", "jQuery"]
};



// Bio function that displays info from the bio object:
//We added a display method to the bio object (aka encapsulation)
bio.display = function() {

// header info - name, title, image
    $("#header").prepend(HTMLheaderRole.replace("%data%", bio.role));
    $("#header").prepend(HTMLheaderName.replace("%data%", bio.name));
    $("#header").append(HTMLbioPic.replace("%data%", bio.biopic));

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        $("#skills").append(HTMLskills.replace("%data%", bio.skills[0]));
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[1]));
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[2]));
        $("#skills").append(HTMLskills.replace("%data%", bio.skills[3]));
    }

    $("#topContacts").append(HTMLmobile.replace("%data%", bio.contacts.mobile));
    $("#topContacts").append(HTMLemail.replace("%data%", bio.contacts.email));
    $("#topContacts").append(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    $("#topContacts").append(HTMLgithub.replace("%data%", bio.contacts.github));
    $("#topContacts").append(HTMLlocation.replace("%data%", bio.contacts.location));

    $("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage));

};

bio.display();



// work object
var work = {
    "jobs": [
        {
            "employer": "EG Technologies",
            "title": "Web Development Intern",
            "location": "Santa Barbara, CA",
            "description": ["Collaborate with Project Managers on developing" +
                "WordPress websites based on website design and customized using HTML," +
                "CSS and PHP. ", "Perform website optimization and QA testing."],
            "dates": 2016
        },
        {
            "employer": "Freudenberg Medical LLC",
            "title": "Marketing Research Analyst",
            "location": "Santa Barbara, CA",
            "description": ["Reported to the VP, performed industry market analysis and assisted in drafting of the 2015 Business Plan", "Conducted in-depth data analysis using traditional and advanced methods and prepared reports and PP presentations"],
            "dates": 2015
        }
    ]
};

// Work function displayWork() with for loop:
function displayWork() {
    for (var i=0; i < work.jobs.length; i++) {
        // created new div for work experience
        $("workExperience").append(HTMLworkStart);
        //concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[i].title);
        $(".work-entry:last").append(formattedEmployer + formattedTitle);

        $(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[i].dates));
        $(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[i].description));
    }
}

displayWork();


//projects object
var projects = {
    "projects": [
        {
            "title": "Portfolio",
            "description": ["Created a responsive portfolio for FUTURE work. ", "Technologies used: HTML, CSS, Bootstrap."],
            "dates": "July, 2016",
            "images": "images/portfolio.png"
        },
        {
            "title": "Animal Trading Card",
            "description": ["First CSS project: eye-pleasing animal trading card from scratch. Practiced my CSS and design skills. ", "Technologies used: HTML, CSS."],
            "dates": "June, 2016",
            "images": "images/animal-card.png"
        },
        {
            "title": "WordPress WebSite",
            "description": ["Created and customized a website for an imaginary marketing company. ",
            "Imported their blog from Blooger, fixed the imported images.  Configured WP theme and widget area, created a child theme, created Case Studies using Custom Post Type, ",
            "installed Advanced Custom Fields and displayed them on my pages, added case studies to the homepage and crate custom archive, added featured work to the homepage, created a contact page and other content and hero images. ", "Technologies used: WordPress, HTML, CSS."],
            "dates": "June, 2016",
            "images": "images/accelerate.png"
        }
    ]
};

projects.display = function() {
    for (var i=0; i < projects.projects.length; i++) {
        $("#projects").append(HTMLprojectStart);

        $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[i].title));
        $(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[i].dates));
        $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[i].description));
        $(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[i].images));
    }
};

projects.display();

// education object
var education = {
    "schools": [
        {
            "name": "Russian State University",
            "city": "Kaliningrad, Russia",
            "degree": "MS",
            "major": ["Linguistics", "Communication"],
            "dates": 2003
        },
        {
            "name": "UCSB",
            "city": "Santa Barbara, CA, US",
            "degree": "Certificate",
            "major": "Paralegal Studies",
            "dates": 2006
        }
    ]
,
    "onlineCourses": [
        {
            "title": "Front-End Web Development",
            "school": "Udacity",
            "url": "http://www.udacity.com",
            "dates": 2016
        },
        {
            "title": "WordPress Web Development",
            "school": "Skillcrush",
            "url": "http://www.skillcrush.com",
            "dates": 2016
        }
    ]
};

education.display = function() {
    for (var i=0; i < education.schools.length; i++) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[i].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
        $(".education-entry:last").append(formattedName + formattedDegree);

        $(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[i].dates));
        $(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[i].city));
        $(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[i].major));
    }
};

education.display();

education.display = function() {
    for (var i=0; i < education.onlineCourses.length; i++) {
        $(".education-entry:last").append(HTMLonlineClasses);

        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[i].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[i].school);
        $(".education-entry:last").append(formattedTitle + formattedSchool);

        $(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[i].dates));
        $(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[i].url));
    }
};

education.display();

//FUNCTION to Internationalize Names:
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] +" "+name[1];
}

$('#main').append(internationalizeButton);

//you want to see a map?
$("#mapDiv").append(googleMap);