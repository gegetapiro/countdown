<?php
$filename = "timevalue.txt";
$handler = fopen($filename, "w+");

if(false === $handler){
	printf("impossibile aprire il file %s, $filename");
	exit;
}else{
fwrite($handler, $_GET["variableName"]);
}
fclose($handler);
?>