//Embed JavaScript and Verify Integration
console.log('Hello World!');

//Show Alert When Resume is Downloaded
let hasDownloadedResume = false;

const button = document.getElementById('resume_download');
button.addEventListener("click", function download() 
{
    if(hasDownloadedResume == false)
    {
        alert("Your resume is downloaded successfully!" )
        hasDownloadedResume = true;
    }
}
);

//Define Variables for User Data
const name = "Matthew";
    //define hasDownloadedResume as a guard for multiple downloads of resume

//Display Personalized Greeting
function showGreeting(name)
{
    return "Hello, my name is " + name + "! Welcome to my portfolio!"
}

window.addEventListener('DOMContentLoaded', function pageLoad() {
    const greetingSection = document.getElementById('greeting');

        // Update the section content
        greetingSection.textContent = showGreeting(name);;
});

//Use Arithmetic for Date Calculations
function daysUntilDeadline(dueDate)
{
    let end = new Date(dueDate);

    //create current day
    let start = new Date();

    let timeDifference = end - start;
    let daysLeft = timeDifference / (1000 * 3600 * 24);


    return Math.round(daysLeft);
}

//function to print output
function displayTimeRemaining(dueDate)
{
    let timeRemaining = daysUntilDeadline(dueDate);
    return timeRemaining + " days until due date (" + dueDate + ").";
}

//christmas is end date
const deadline = '2026-12-25';

//output time in projects section
window.addEventListener('DOMContentLoaded', function pageLoad() {
    const timeRemaining = document.getElementById('countdown');

        // Update the section content
        timeRemaining.textContent = displayTimeRemaining(deadline);
});

//New Content
//Step 1: Accept skills from the user through input and add them accordingly
const skills = [];

function processForm() {
    let skill = document.getElementById("userSkill").value;
    console.log("Current value:", skill);
    skills.push(skill);
    return false;
}


//Step 2: Implement a Loop for Project Listings
const projectOne = ["Birthday Invite Project", "Creating a simple birthday invitation", "2026-10-30"];
const projectTwo = ["Favorite Movies", "Display a list of favorite movies", "2026-11-3"];
const projectThree = ["Portfolio", "Creating a portfolio", "2026-12-25"];

const projectsStuff = document.getElementById('projects-listings');

for(let i = 0; i < 3; i++)
{
    projectsStuff.innerHTML += projectOne[i] + ", ";
}
projectsStuff.innerHTML += "<br>";

for(let i = 0; i < 3; i++)
{
    projectsStuff.innerHTML += projectTwo[i] + ", ";
}
projectsStuff.innerHTML += "<br>";

for(let i = 0; i < 3; i++)
{
    projectsStuff.innerHTML += projectThree[i] + ", ";
}
projectsStuff.innerHTML += "<br>";

//Step 3: Use Comparators and Equality for Deadline Display
const currentDate = new Date();
const projectOneState = document.getElementById('project-one-state');
const projectTwoState = document.getElementById('project-two-state');
const projectThreeState = document.getElementById('project-three-state');

function dueDateMaker(dueDate)
{
    return new Date(dueDate);
}

window.addEventListener('DOMContentLoaded', function pageLoad() {
    
    //create conditionals to consitently update each projects status
    if(currentDate < dueDateMaker(projectOne[2]))
    {
        projectOneState.innerHTML = "Ongoing";
    }
    else if(currentDate >= dueDateMaker(projectOne[2]))
    {
        projectOneState.innerHTML = "Completed";
    }

    if(currentDate < dueDateMaker(projectTwo[2]))
    {
        projectTwoState.innerHTML = "Ongoing";
    }
    else if(currentDate >= dueDateMaker(projectTwo[2]))
    {
        projectTwoState.innerHTML = "Completed";
    }

    if(currentDate < dueDateMaker(projectThree[2]))
    {
        projectThreeState.innerHTML = "Ongoing";
    }
    else if(currentDate >= dueDateMaker(projectThree[2]))
    {
        projectThreeState.innerHTML = "Completed";
    }
});

//Step 4: Resume Download Tracker with Dynamic Count Display
function addDownloadCount(downloadCheck)
{
    return "Resume downloaded " + downloadCheck +" times.";
}

let downloadCheck = 0;
window.addEventListener('DOMContentLoaded', function displayDownloadCount() 
{
    button.addEventListener("click", function downloadChecker()
    {
        downloadCheck++;
        const download_displayer = document.getElementById('download_display');
        download_displayer.textContent = addDownloadCount(downloadCheck);
    });
});

//Step 5: Dynamically Create a Table for Experience and Education


// Adding the entire table to the body tag

const experienceTableText = [" ", "Company/Role","Dates:", "1.","McDonalds: Dog Janitor","2030-12-25",
    "2.", "NYC: Spider-Man", "1962-2026"];

const educationTableText = [" ", "School","Dates:", "1.", "Northern Arizona University", "2025-2029",
    "2.", "Central High School", "2022-2024"];

function makeTable(sampleArray, idValue)
{  
    let table = document.createElement('table');
    let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.appendChild(thead);
    table.appendChild(tbody);

    document.getElementById(idValue).appendChild(table);

    let index = 0;

    let row_1 = document.createElement('tr');
    let heading_1 = document.createElement('th');
    heading_1.innerHTML = sampleArray[index];
    index++;
    let heading_2 = document.createElement('th');
    heading_2.innerHTML = sampleArray[index];
    index++;
    let heading_3 = document.createElement('th');
    heading_3.innerHTML = sampleArray[index];
    index++;

    row_1.appendChild(heading_1);
    row_1.appendChild(heading_2);
    row_1.appendChild(heading_3);
    thead.appendChild(row_1);


    // Creating and adding data to second row of the table
    let row_2 = document.createElement('tr');
    let row_2_data_1 = document.createElement('td');
    row_2_data_1.innerHTML = sampleArray[index];
    index++;
    let row_2_data_2 = document.createElement('td');
    row_2_data_2.innerHTML = sampleArray[index];
    index++;
    let row_2_data_3 = document.createElement('td');
    row_2_data_3.innerHTML = sampleArray[index];
    index++;

    row_2.appendChild(row_2_data_1);
    row_2.appendChild(row_2_data_2);
    row_2.appendChild(row_2_data_3);
    tbody.appendChild(row_2);


    // Creating and adding data to third row of the table
    let row_3 = document.createElement('tr');
    let row_3_data_1 = document.createElement('td');
    row_3_data_1.innerHTML = sampleArray[index];
    index++;
    let row_3_data_2 = document.createElement('td');
    row_3_data_2.innerHTML = sampleArray[index];
    index++;
    let row_3_data_3 = document.createElement('td');
    row_3_data_3.innerHTML = sampleArray[index];
    index++;

    row_3.appendChild(row_3_data_1);
    row_3.appendChild(row_3_data_2);
    row_3.appendChild(row_3_data_3);
    tbody.appendChild(row_3);
}

makeTable(experienceTableText,'experience-table');
makeTable(educationTableText,'education-table');

//Bonus Challenge
document.getElementById('themeToggle').addEventListener('click', function darkModeToggle() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-bs-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';
  
  html.setAttribute('data-bs-theme', newTheme);
});
