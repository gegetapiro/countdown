<?php
$txtfile = "headlinecontent.txt";
$handle = fopen($txtfile, "w");

if ($handle === false) {
    printf("impossibile aprire il file");
    exit;
} else {
    fwrite($handle, $_POST["description"]);
}
