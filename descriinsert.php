<?php
$txtfile = "headlinecontent.txt";
$handle = fopen($txtfile, "w");

if ($handle === false) {
    printf("impossibile aprire il file " . error_get_last());
    exit;
} else {
    fwrite($handle, $_POST["txtdesc"]);
}
