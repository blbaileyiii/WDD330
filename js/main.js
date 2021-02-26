const links = [
    {label: "Notes", url: "week01/"},
    {label: "Notes", url: "week02/"},
    {label: "Notes", url: "week03/"},
    {label: "Notes", url: "week04/"},
    {label: "Notes", url: "week05/"},
    {label: "Notes", url: "week06/"},
    {label: "Notes", url: "week07/"},
    {label: "Notes", url: "week08/"},
    //{label: "Notes", url: "week09/"},
    //{label: "Notes", url: "week10/"},
    //{label: "Notes", url: "week11/"},
    //{label: "Notes", url: "week12/"},
    //{label: "Notes", url: "week13/"},
    //{label: "Notes", url: "week14/"}
];

let olLinks = document.querySelector('.links');

for (let i = 0; i < links.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = "<a href=\"" + links[i].url + "\">" + links[i].label + "</a>";
    olLinks.appendChild(li);
}