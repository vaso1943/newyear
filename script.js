let music;
// Сайт загрузился
$(document).ready(function () {
    // Настраиваем музыку
    music = new Howl({
        src: ["audio/1.mp3", "audio/2.mp3", "audio/3.mp3"],
        loop: true,
        volume: 0.5
    });
});
$("#tree>img").click(function(e){
    let name = e.target.id;

    if(name == "toy1"){
        music.play(1);
    }
    else if(name == "toy2"){
        music.play(2);
    }
    else if(name == "toy3"){
        music.play(3);
    }
});

let timer = setInterval(function(){
    let newYear = new Date("1 January 2021 00:00:00");
    let now = new Date();
    let diff = newYear - now;
    console.log(diff)

    let seconds = Math.floor( (diff%(60*1000)) / 1000);
    let minutes = Math.floor( (diff%(60*60*1000)) / (60*1000));
    let hours = Math.floor( (diff%(24*60*60*1000)) / (60*60*1000) );
    let days = Math.floor( diff/(24*60*60*1000) );

    $("#seconds").text(seconds);
    $("#minutes").text(minutes + " :");
    $("#hours").text(hours + " :");
    $("#days").text(days + " :");

}, 1000);