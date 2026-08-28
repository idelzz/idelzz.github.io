//Head
var flag;
var UA;
var userAgentInfo = navigator.userAgent;
var Agents = ['Android', 'iPhone', 'SymbianOS', 'Windows Phone', 'iPad', 'iPod'];
UA = "pc";
for (var i = 0; i < Agents.length; i++) {
    if (userAgentInfo.indexOf(Agents[i]) != -1) {
        UA = "pe";
        break;
    }
}
//pcpe
window.onload = function () {
    var DLModeValue = localStorage.getItem("DLModeKey");
    //黑暗模式检测（切换）
    if (DLModeValue == "dark") {
        $("#homeTopPic").attr('src', "./picture/homePicDark.png");
        $("body").css({"background-color": "#2C2F3C", "color": "white"});
        $(".darkLightInput").css({"background-color": "#262631", "border-bottom-color": "white", "color": "white"});
        $(".darkLightTop").css({"background-color": "#262631"});
        $("article").css({"background-color": "#262631"});
        $("#messageBoardContent").css({"border-top-color": "#2C2F3C", "border-bottom-color": "#2C2F3C"});
    }
}
//Head
//Body
function popUp(text) {
    $("#popUp").fadeIn("50");
//弹窗出现
    var txt = document.createTextNode(text);
//获取文本
    var oPopUp = document.getElementById("popUp");
//获取弹窗id
    var oOldPopUpText = document.getElementById("popUpText");
//获取弹窗内容容器
    var oNewPopUpText = document.createElement("p");
//创建新的弹窗内容容器
    oNewPopUpText.id = "popUpText";
//添加ID
    oNewPopUpText.appendChild(txt);
//将文本插入到新的弹窗内容容器中
    oPopUp.replaceChild(oNewPopUpText, oOldPopUpText);
//替换旧的弹窗内容容器
    setTimeout(function () {
        $("#popUp").fadeOut("50");
    }, 2000);
//行云流水，不愧是我
}

function openMenu() {
    if (flag != 1) {
        $("#occlusionLayer").fadeIn("50");
        $("#developerOptions").css({"right": "5%"});
        flag = 1;
    } else {
        $("#occlusionLayer").fadeOut("50");
        $("#developerOptions").css({"right": "-80%"});
        flag = 2;
    }
}

function deBug() {
    var text = document.getElementById("deBug1").value;
    var text = text.toLowerCase();
    var text = text.split(" ");
    if (text[0] == "dark") {
        //深色模式开启
        $("#homeTopPic").attr('src', "./picture/homePicDark.png");
        $("body").animate({"background-color": "#2C2F3C", "color": "white"}, 1000);
        $(".darkLightInput").animate({
            "background-color": "#262631",
            "border-bottom-color": "white",
            "color": "white"
        }, 1000);
        $(".darkLightTop").animate({"background-color": "#262631"}, 1000);
        $("article").animate({"background-color": "#262631"}, 1000);
        $("#messageBoardContent").animate({"border-top-color": "#2C2F3C", "border-bottom-color": "#2C2F3C"}, 1000);
        localStorage.setItem("DLModeKey", "dark");

        //深色模式结束
    } else if (text[0] == "light") {
        //浅色模式
        $("#homeTopPic").attr('src', "./picture/homePic.png");
        $("body").animate({"background-color": "#F5F5F4", "color": "black"}, 1000);
        $(".darkLightInput").animate({
            "background-color": "white",
            "border-bottom-color": "black",
            "color": "black"
        }, 1000);
        $(".darkLightTop").animate({"background-color": "white"}, 1000);
        $("article").animate({"background-color": "white"}, 1000);
        $("#messageBoardContent").animate({"border-top-color": "#F5F5F4", "border-bottom-color": "#F5F5F4"}, 1000);
        localStorage.setItem("DLModeKey", "light");
        //浅色模式结束
    } else if (text[0] == "ua") {
        popUp("你是" + UA + "端")
    } else {
        popUp("无效的指令，请检查后重试")
    }
}

//foot
//end
