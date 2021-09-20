<?php
    $filename = "headlinecontent.txt";
    $taker = fopen($filename, "r");
    if ($taker === false){
        printf("impossibile aprire il file: " . $filename);
    }else{
        $dati = fread($taker, 300);
        echo $dati;

    }
