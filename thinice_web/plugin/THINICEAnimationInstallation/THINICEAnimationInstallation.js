/*
欢迎使用THINICE动画装置，作者：iCE CUBE
注意事项：1、如果页面有style元素，引入该js时必须在style元素之后，建议放在head末尾就可以了
        2、只能给静态定位(默认定位)的元素添加动画，请确保你添加动画的元素没有自定义的top，left，bottom，right等css属性
使用方法：
        1、给元素添加对应的class即可让元素启动页面时添加动画
        2、不同class可以叠加，例如<div class="TAIUp TAILeft TAILine2"></div>
        3、可以加的class有:
            (1)TAIUp：让元素进入页面时向上淡入。
            (2)TAILeft：让元素进入页面时向左淡入。
            (3)TAIDown：让元素进入页面时向下淡入。
            (4)TAIRight：让元素进入页面时向右淡入。
            (5)TAILine2：该元素会使用2号动画线路(线路：默认为1线路，相同线路的元素动画进入顺序为至上到下，给该元素加入该class后会切换不同线路以达到错位动画的效果）
            (6)TAILine3：该元素会使用3号动画线路
另外，请查看下面的设置以最大化自定义你的进入动画
*/
//设置SETTING
let transitionSetting = "all 1s cubic-bezier(0,1,0,1) 0s";  //动画CSS时间曲线
let whichTAIElements = ".TAIUp,.TAILeft,.TAIRight,.TAIDown";    //元素选择器，选中的元素会启动进入动画，你可以直接设定为div，button等元素名称，那就可以不加class了，默认为向上淡入
let amplitude = "50px";     //动画运动幅度
const TAILineDelay = 50;    //动画推进的时间间隔
let deBUg = true;           //控制台输出日志
let TAILine1Count = 0;      //该线路的动画启动延迟，更改的值的是指推迟的元素数量
let TAILine2Count = 2;
let TAILine3Count = 0;
//设置SETTING

let style;
if (document.getElementsByTagName("style")[0] === undefined) {
    style = document.createElement("style");
    document.getElementsByTagName("head")[0].appendChild(style);
}
style = document.getElementsByTagName("style")[0];
let noBody = document.createTextNode("body{display:none;}")
style.appendChild(noBody);

document.ready = function (callback) {
    ///兼容FF,Google
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', function () {
            document.removeEventListener('DOMContentLoaded', arguments.callee, false);
            callback();
        }, false)
    }else if (document.lastChild === document.body) {
        callback();
    }
}
document.addEventListener("DOMContentLoaded", (event) => {
    //动画遍历，初始化
    const TAIElements = document.querySelectorAll(whichTAIElements);
    TAIElements.forEach((el) => {
        //遍历与准备信息
        let originStyle = false;
        let TAILine = 1;
        if (el.getAttribute('style') == null) {
            originStyle = true;
        }
        const TAIElementsStyle = getComputedStyle(el);
        let originPosition = TAIElementsStyle.position;
        let originTransition = TAIElementsStyle.transition;
        let originOpacity = TAIElementsStyle.opacity;
        let aniMalDirection;

        if (el.classList.contains('TAILine2')) {
            TAILine = 2;
        } else if (el.classList.contains('TAILine3')) {
            TAILine = 3;
        }

        //信息检测完毕动画准备
        el.style.opacity = 0;

        if (originPosition !== "relative") {
            el.style.position = "relative";
        }
        if (el.classList.contains('TAIUp')) {
            aniMalDirection = "toUp";
            el.style.top = amplitude;
        }

        if (el.classList.contains('TAIDown')) {
            aniMalDirection = "toDown";
            el.style.top = "-" + amplitude;
        }

        if (el.classList.contains('TAILeft')) {
            aniMalDirection = "toLeft";
            el.style.left = amplitude;
        }

        if (el.classList.contains('TAIRight')) {
            aniMalDirection = "toRight";
            el.style.left = "-" + amplitude;
        }
        setTimeout(function () {
            el.style.transition = transitionSetting;

        }, 50);

        //准备完毕，报告状态
        if (deBUg) {
            console.log(`
            元素:${el.tagName}
            ID:${el.id}
            CLASS:${el.classList}
            定位: ${originPosition}
            方向:${aniMalDirection}
            线路:${TAILine}
        `);
        }

        //启动
        switch (TAILine) {
            case 1:
                TAILine1Count++;
                TAI(1, TAILine1Count, el, originStyle, originPosition, originTransition, originOpacity, aniMalDirection);
                break;
            case 2:
                TAILine2Count++;
                TAI(2, TAILine2Count, el, originStyle, originPosition, originTransition, originOpacity, aniMalDirection);
                break;
            case 3:
                TAILine3Count++;
                TAI(3, TAILine3Count, el, originStyle, originPosition, originTransition, originOpacity, aniMalDirection);
                break;
        }
    });
    style.removeChild(noBody);

    //动画开始
    function TAI(TAILine, TAILineCount, el, originStyle, originPosition, originTransition, originOpacity) {

        setTimeout(() => {
            setTimeout(function () {
                el.style.top = "0px";
                el.style.left = "0px";
                el.style.opacity = originOpacity;
            }, 100);
            setTimeout(function () {
                el.style.position = originPosition;
                el.style.transition = originTransition;
                el.style.opacity = "";
                el.style.transition = "";
                if (originPosition === "static") {
                    el.style.position = null;
                    el.style.top = "";
                    el.style.left = "";
                }

                if (originStyle) {
                    el.removeAttribute("style");
                }
            }, parseFloat(transitionSetting.split(" ")[1]) * 1000 + 100);//动画结束后复原
        }, TAILineCount * TAILineDelay);
    }
});