<?php

include 'cnx.php';

$sql = $cnx->prepare("select * from action");
$sql->execute();

echo "<table border='1'>";
        foreach($sql->fetchAll(PDO::FETCH_ASSOC) as $ligne)
        {
        	$sql2 = $cnx->prepare("select * from acheter where numTrader = ".$_GET['idTrader']." and numAction = ".$ligne['idAction']."");
			$sql2->execute();
			foreach($sql2->fetchAll(PDO::FETCH_ASSOC) as $ligne2) {

            echo "<tr id=".$ligne['nomAction']." onclick='getPrixCloture(event)'>";
            echo "<td>".$ligne['idAction']."</td>";
            echo "<td>".$ligne['nomAction']."</td>";
            echo "<td>".$ligne2['montantAchat']."</td>";
            echo "<td>".$ligne2['quantite']."</td>";
            echo "</tr>";
        	}
        }
        echo "</table>";

?>