const links = [
    {label: "Notes", url: "week01/index.html"},
    {label: "Notes", url: "week02/index.html"},
    {label: "Notes", url: "week03/index.html"}
];

let olLinks = document.querySelector('.links');

for (let i = 0; i < links.length; i++) {
    let li = document.createElement('li');
    li.innerHTML = "<a href=\"" + links[i].url + "\">" + links[i].label + "</a>";
    olLinks.appendChild(li);
}