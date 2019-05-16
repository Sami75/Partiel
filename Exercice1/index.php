<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Bourse</title>
    <script src="./JQuery/jquery-3.1.1.min.js"></script>
    <script src="./js/mesfonctions.js"></script>
</head>
<body>
    <div style="display: flex">
    <?php
        include './php/cnx.php';
        $sql = $cnx->prepare("select * from trader");
        $sql->execute();
        echo "<table border='1'>";
        foreach($sql->fetchAll(PDO::FETCH_ASSOC) as $ligne)
        {
            echo "<tr onClick='selectTrader(".$ligne['idTrader'].", event)'>";
            echo "<td>".$ligne['idTrader']."</td>";
            echo "<td>".$ligne['nomTrader']."</td>";
            echo "</tr>";
        }
        echo "</table>";

    ?>
    <div id="divAction"></div>
    <div id="divPrix" style="display: inline-flex;"></div>
</div>
</body>
</html>