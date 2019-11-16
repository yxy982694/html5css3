<?
$str = file_get_contents('php://input');
echo "服务器端接受数据：".$str;
flush();
?>