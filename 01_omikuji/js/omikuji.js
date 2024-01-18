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
        }, "3000"
    )
}    
);

const btn1 = document.getElementById("btn1");
btn1.addEventListener("click",
    function(){
       
        let n = Math.floor(Math.random()*4);

        switch(n){
            case 0:
                btn1.textContent = "歌";
                btn1.style.color = "#FF0000";
                btn1.style.fontSize = "30px";
                break;
            case 1:
                btn1.textContent = "ダンス";
                btn1.style.color = "#FFF001";
                btn1.style.fontSize = "30px";
                break;
            case 2:
                btn1.textContent = "Rap";
                btn1.style.color = "#261e1c";
                btn1.style.fontSize = "30px";
                break;
            case 3:
                btn1.textContent = "バスケ";
                btn1.style.color = "#FF0000";
                btn1.style.fontSize = "50px";
                break;
        }
        
        $(document).snowfall("clear");
        
        $(document).ready(function(){
            $(document).snowfall({
                maxSpeed : 10, 
                minSpeed : 4, 
                maxSize : 50, 
                minSize : 10, 
                image : 'img/lanqiu.png'
            });
        });
    },false
);  

function goBack(){
    window.history.back();
}