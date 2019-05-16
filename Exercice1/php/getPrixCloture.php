<?php
$prixCloture = file_get_contents("https://api.iextrading.com/1.0/stock/".$_GET['nomAction']."/quote");
echo $prixCloture;
?>