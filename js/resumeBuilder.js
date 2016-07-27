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
function displayBio() {

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
        formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
        $("#skills").append(formattedSkill);
            formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
        $("#skills").append(formattedSkill);
            formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
        $("#skills").append(formattedSkill);
    }
}

displayBio();



// work object
var work = {
    "jobs": [
        {
            "employer": "EG Technologies",
            "title": "Web Development Intern",
            "location": "Santa Barbara, CA",
            "description": ["Collaborate with Project Managers on developing WordPress websites based on website design and customized using HTML, CSS and PHP", "Perform website optimization and QA testing"],
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
            "description": ["Created a responsive portfolio of future work", "Technologies used: HTML, CSS, Bootstrap"],
            "dates": 2016,
            "images": "images/xxxx.jpg"
        },
        {
            "title": "Animal Trading Card",
            "description": ["Created an eye-pleasing trading card", "Technologies used: HTML, CSS"],
            "dates": 2016,
            "images": "images/xxxx.jpg"
        }
    ]
};

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
    "onlioneCourses": [
        {
            "title": "Front-End Web Developer",
            "school": "Udacity",
            "url": "http://www.udacity.com",
            "dates": 2016
        },
        {
            "title": "WordPress Web Developer",
            "school": "Skillcrush",
            "url": "http://www.skillcrush.com",
            "dates": 2016
        }
    ]
};

//FUNCTION to Internationalize Names:
function inName(name) {
    name = name.trim().split(" ");
    console.log(name);
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();

    return name[0] +" "+name[1];
}

$('#main').append(internationalizeButton);