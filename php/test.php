<?php
header('Content-Type: text/event-stream');
header('Cache-Control: no-cache');
echo "event:tesx\n\n";
echo "data:服务器端当前时间：".date('Y/m/d H:i:s')."\n\n";
echo "retry: 5000\n\n";
echo "id:1\n\n";
flush()
?>