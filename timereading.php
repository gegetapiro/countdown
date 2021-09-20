<?php
$filename = "timevalue.txt";
$handler = fopen($filename, "r");
if($handler === false){
	printf("impossibile aprire il file " . $filename);
}else{

	
	$data = fread($handler, 20);
	$datanum = (int)$data;
	echo $datanum;
	
}

?>