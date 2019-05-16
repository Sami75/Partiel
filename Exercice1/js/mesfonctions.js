function selectTrader(idTrader, ev) {
	ev.target.parentElement.style.backgroundColor = "#B0E0E6";
$.ajax
    (
        {
            type:"get",
            url:"php/getActions.php",
            data:"idTrader="+idTrader,
            success:function(data)
            {      			
                $('#divAction').empty();
                $('#divAction').append(data);
            },
            error:function()
            {
                alert("Erreur sur la récupération des actions");
            }
        }
    );
}

function getPrixCloture(ev) {
		ev.target.parentElement.style.backgroundColor = "#B0E0E6";

	$.ajax
    (
        {
            type:"get",
            url:"php/getPrixCloture.php",
            data:"nomAction="+ev.target.parentElement.id,
            success:function(data)
            {      		
            	data = $.parseJSON(data);
            	let montantAchat = Math.round(ev.target.parentElement.childNodes[3].innerHTML * ev.target.parentElement.childNodes[2].innerHTML);
            	let montantVente = Math.round(parseFloat(ev.target.parentElement.childNodes[3].innerHTML) * data.close);
            	let gainOuPerte = montantVente - montantAchat;

                var tab = "<table border='1'>";
                    tab = tab + "<tr>";
                    tab = tab + "<td>Prix de clôture</td>";
                    tab = tab + "<td>Montant Achat</td>";
                    tab = tab + "<td>Montant Vente</td>";
                    tab = tab + "<td>Gain ou Perte sur l'action</td>";
                    tab = tab + "</tr>";                
                    tab = tab + "<tr>";
                    tab = tab + "<td>"+data.close+"</td>";
                    tab = tab + "<td>"+montantAchat+"</td>";
                    tab = tab + "<td>"+montantVente+"</td>";
                    tab = tab + "<td>"+gainOuPerte+"</td>";
                    tab = tab + "</tr>";
                tab= tab + "</table>";
                $('#divPrix').empty();
                $('#divPrix').append(tab);
            },
            error:function()
            {
                alert("Erreur sur la récupération des actions");
            }
        }
    );
}

