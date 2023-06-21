let nBefore = null;
let n = 0;

window. addEventListener("DOMContentLoaded",
function() {
     $("header").textillate({
        loop: false, 
        minDisplayTime: 10, 
        initialDelay: 10, 
        autoStart: true, 
        in: { 
            effect: "fadeInLeftBig", 
            delayScale: 1.5, 
            delay: 50, 
            sync: false, 
            shuffle: true 
        }
    });
    
    $(function(){
        ScrollReveal().reveal("#btn1", { duration: 9000 });
    });
    setTimeout(
        function(){
            let popMessage = "こんにちは!練習時間二年半の練習生！今日は何を練習する？";
            window.alert(popMessage);
        }, "2500"
    )
}    
);

let resultSound =["sound/ji.mp3","sound/ji.mp3","sound/ji.mp3","sound/ganma.mp3"];

let soundEndflag = "0"

const btn2 = document.getElementById("btn1");
const omikujiText = document.getElementById("omikujiText");
const omikujiTextImage = document.getElementById("omikujiTextImage");

btn1.addEventListener("click",
    function(){
        if(soundEndflag === "1"){
        soundControl("end","");
        }
        let resultText = ["img/ge.jpeg","img/wu.jpg","img/rap.jpg","img/lanqiu.jpeg"];
        //let resultColor = ["#FF0000","#FFF001","#261e1c","#FF0000"];
        //let resultFontSize = ["50px","50px","50px","70px"];
        let resultMaxspeed = [10,10,10,10];
        let resultMaxSize = [20,20,20,20];
        let resultSound = ["sound/ji.mp3","sound/ji.mp3","sound/ji.mp3","sound/ganma.mp3"];
        while(n == nBefore){   
            n = Math.floor(Math.random()*resultText.length);
        }
        nBefore = n;
        omikujiTextImage.src = resultText[n];
        omikujiText.classList.add("omikujiPaper");
        omikujiTextImage.addEventListener("animationend",
            function(){
                omikujiTextImage.classList.remove("omikujiPaper");
            },false
        )
        w_sound = resultSound[n];
        soundControl("start",w_sound);
        soundEndflag = "1";
        
        $(document).snowfall("clear");
        
        setTimeout(
            function(){
                $(document).ready(function(){
                    $(document).snowfall({
                        maxSpeed : 10, 
                        minSpeed : 4, 
                        maxSize : 50, 
                        minSize : 10, 
                        image : 'img/f_f_event_57_s512_f_event_57_0nbg.png'
                    });
                });
            },
            "200"
        );
    },false        
);  

let w_sound
let music
function soundControl(status,w_sound){
    if(status === "start"){
        music = new Audio(w_sound);
        music.currentTime = 0;
        music.play();
    }else if(status === "end"){
        music.pause();
        music.currentTime = 0;
    }
}

function goBack(){
    window.history.back();
}
