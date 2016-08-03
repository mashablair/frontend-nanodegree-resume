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
    var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedRole);
    var formattedName = HTMLheaderName.replace("%data%", bio.name);
    $("#header").prepend(formattedName);
    var formattedPic = HTMLbioPic.replace("%data%", bio.biopic);
    $("#header").append(formattedPic);

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
        var formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
    }

    var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
    $("#topContacts").append(formattedMobile);
    var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
    $("#topContacts").append(formattedEmail);
    var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
    $("#topContacts").append(formattedTwitter);
    var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
    $("#topContacts").append(formattedGithub);
    var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").append(formattedLocation);

    var formattedWelcomeMessage = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedWelcomeMessage);

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

// Work function displayWork() with for-in loop:
function displayWork() {
    for (job in work.jobs) {
        // create new div for work experience
        $("workExperience").append(HTMLworkStart);
        //concat employer and title
        var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
        var formattedEmployerTitle = formattedEmployer + formattedTitle;
        $(".work-entry:last").append(formattedEmployerTitle);

        var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
        $(".work-entry:last").append(formattedDates);

        var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
        $(".work-entry:last").append(formattedDescription);
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
    for (project in projects.projects) {
        $("#projects").append(HTMLprojectStart);

        var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
        $(".project-entry:last").append(formattedTitle);

        var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
        $(".project-entry:last").append(formattedDates);

        var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
        $(".project-entry:last").append(formattedDescription);

        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedImage);
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
    for (school in education.schools) {
        $("#education").append(HTMLschoolStart);

        var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
        var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
        var formattedNameDegree = formattedName + formattedDegree;
        $(".education-entry:last").append(formattedNameDegree);

        var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
        $(".education-entry:last").append(formattedDates);

        var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].city);
        $(".education-entry:last").append(formattedLocation);

        var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
        $(".education-entry:last").append(formattedMajor);
    }
};

education.display();

education.display = function() {
    for (school in education.onlineCourses) {
        $(".education-entry:last").append(HTMLonlineClasses);

        var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
        var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
        var formattedTitleSchool = formattedTitle + formattedSchool;
        $(".education-entry:last").append(formattedTitleSchool);

        var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates);
        $(".education-entry:last").append(formattedOnlineDates);

        var formattedURL = HTMLonlineURL.replace("%data%", education.onlineCourses[school].url);
        $(".education-entry:last").append(formattedURL);
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