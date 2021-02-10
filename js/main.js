const links = [
    {label: "Notes", url: "week01/index.html"},
    {label: "Notes", url: "week02/index.html"},
    {label: "Notes", url: "week03/index.html"},
    {label: "Notes", url: "week04/index.html"},
    {label: "Notes", url: "week05/index.html"},
    {label: "Notes", url: "week06/index.html"},
    //{label: "Notes", url: "week07/index.html"},
    //{label: "Notes", url: "week08/index.html"},
    //{label: "Notes", url: "week09/index.html"},
    //{label: "Notes", url: "week10/index.html"},
    //{label: "Notes", url: "week11/index.html"},
    //{label: "Notes", url: "week12/index.html"},
    //{label: "Notes", url: "week13/index.html"},
    //{label: "Notes", url: "week14/index.html"}
];

let olLinks = document.querySelector('.links');

for (let i = 0; i < links.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = "<a href=\"" + links[i].url + "\">" + links[i].label + "</a>";
    olLinks.appendChild(li);
}