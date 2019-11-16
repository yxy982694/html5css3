<?
for ($i=0;$i<count($_FILES['myFile']['name']);$i++) {
	move_uploaded_file($_FILES['myFile']['tmp_name'][$i], './uploads/'.iconv('utf-8', 'gbk', $_FILES['myFile']['tmp_name'][$i]));
	echo "已上传文件：".$_FILES['myFile']['tmp_name'][$i].
}
flush();
?>