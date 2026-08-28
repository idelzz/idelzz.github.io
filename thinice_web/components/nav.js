/*引入CSS*/
var link = document.createElement("link");
link.rel = "stylesheet";
link.type = "text/css";
link.href = "../components/nav.css";
var head = document.getElementsByTagName("head")[0];
head.appendChild(link);
//插入header
var oHeader = document.getElementsByTagName("header");
oHeader[0].innerHTML =
    "    <a href=\"../index.php\"><img id=\"logo\" src=\"../img/iceLogo.jpg\" height=\"59px\" alt=\"ice logo\"/></a>\n" +
    "    <nav>\n" +
    "        <ul>\n" +
    "            <li><a class=\"nav\" href=\"..\">首页</a></li>\n" +
    "            <li><a class=\"nav\" href=\"..\">关于</a></li>\n" +
    "            <li><a class=\"nav\" href=\"..\">待定</a></li>\n" +
    "            <li><a class=\"nav\" href=\"..\">待定</a></li>\n" +
    "        </ul>\n" +
    "    </nav>\n" +
    "    <a href=\"../official/login.html\"><div id=\"avatarBox\" class=\"clickable\"></div></a>\n" +
    "    <div id=\"searchIndex\" class=\"clickable\"> 搜索&nbsp;&nbsp;<span class=\"iconfont\">&#xe63c;</span>\n" +
    "    </div>\n";
var oFooter = document.getElementsByTagName("footer");
//插入footer
oFooter[0].innerHTML =
    "    <span style=\"float:right;color:#888888\">&copy;2020-2023 iCE Studio.</span>\n" +
    "    <a class=\"clickable\" style=\"color:#888888\" href=\"https://qm.qq.com/cgi-bin/qm/qr?k=HrnWZbONqp_B0AnK5KU_QXiejar89y5H&noverify=0&personal_qrcode_source=3\">联系站长</a>\n";