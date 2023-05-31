window. addEventListener("DOMContentLoaded",
function() {
    let popMessage = "练习时长两年半的练习生你好!今天要练什么呢!";
    window.alert(popMessage);
}, false
);

//おみくじボタン
const btn1 = document.getElementById("btn1");
btn1.addEventListener("click",
    function(){
        let n = Math.floor(Math.random()*4);

        switch(n){
            case 0:
                btn1.textContent = "唱!!";
                btn1.style.color = "#FF0000";
                btn1.style.fontSize = "50px";
                break;
            case 1:
                btn1.textContent = "跳!!";
                btn1.style.color = "#FFF001";
                btn1.style.fontSize = "40px";
                break;
            case 2:
                btn1.textContent = "Rap!!";
                btn1.style.color = "#261e1c";
                btn1.style.fontSize = "30px";
                break;
            case 3:
                btn1.textContent = "篮球!!";
                btn1.style.color = "#FF0000";
                btn1.style.fontSize = "70px";
                break;
        }
    },false
);  