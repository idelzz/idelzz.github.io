<?php
header('content-type:text/html;charset=utf-8');
$myfile = fopen("messageBoard.js", "a") or die("Unable to open file!");

$txt = "iId.unshift('";
fwrite($myfile, $txt);
fwrite($myfile, $_POST['iId']);
$txt = "');";
fwrite($myfile, $txt);

$txt = "iContent.unshift('";
fwrite($myfile, $txt);
fwrite($myfile, $_POST['iContent']);
$txt = "');";
fwrite($myfile, $txt);

echo "<script language=\"javascript\">location.href='index.php';</script>";
?>