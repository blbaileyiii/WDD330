const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const links = [
    {label: "Week01 Notes", url: "week01/index.html"}
];

let currDate = new Date();
let currDay = currDate.getDay();
let currYear = currDate.getFullYear();   

let lastUpdate = new Date(document.lastModified);
let day = days[lastUpdate.getDay()];
let date = lastUpdate.getDate();
let month = months[lastUpdate.getMonth()];
let year = lastUpdate.getFullYear(); 

// Format Ex. Wednesday, 24 July 2020.    
let lastUpdatedTxt = "Last Updated: " + day + ", " + date + " " + month + " " + year + ".";

document.getElementById('currYear').textContent = currYear;
document.getElementById('lastUpdated').innerHTML = lastUpdatedTxt;

let olLinks = document.querySelector('.links');

for (let i = 0; i < links.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = "<a href=\"" + links[i].url + "\">" + links[i].label + "</a>";
    olLinks.appendChild(li);
}