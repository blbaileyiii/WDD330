const keys = Array.from(document.querySelectorAll(".key"));
const audios = Array.from(document.querySelectorAll("audio"));
audios.forEach(audio => {
    audio.onended = function(){
        audio.classList.remove("playing");
    };
});
keys.forEach(key => {
    key.setAttribute("times", 0);
})
document.addEventListener('keydown', function(event){
    let audio = document.querySelector("audio[data-key='" + event.keyCode + "']");
    let container = document.querySelector("div[data-key='" + event.keyCode + "']");
    if(container.getAttribute("times") < 10){
        let times = container.getAttribute("times");
        times++;
        container.setAttribute("times", times);
        container.style.transform = "translateY(" + times*10 + "px)";
        console.log(container.style.transform);
        console.log(times);
    } else{
        container.setAttribute("times", 0);
        container.style.transform = "translateY(0)";
    }
    if(audio){
        if(document.querySelector(".playing")){
            document.querySelector(".playing").pause();
            document.querySelector(".playing").classList.remove("playing");
        }
        audio.classList.add('playing')
        audio.currentTime = 0;
        audio.play();
    }
});
