        function allowDrop(ev)
        {
            ev.preventDefault();
        }
        function drag(ev)
        {
            ev.dataTransfer.setData("case",ev.target.innerText);
        }
        function drop(ev)
        {
            ev.preventDefault();
            let caseGauche = ev.originalTarget.innerText;
            if(ev.dataTransfer.getData("case") % 2 == 0) {
                if(caseGauche % 2 == 0)
                {
                    $('#'+ev.originalTarget.id).empty();
                    $('#'+ev.originalTarget.id).append(ev.dataTransfer.getData("case") * caseGauche);
                }
                else
                    alert("Vous devez déposer sur une valeur paire");
            }
            else
                if(caseGauche % 2 == 0)
                    alert("Vous devez déposer sur une valeur impaire");                    
                else
                {
                    $('#'+ev.originalTarget.id).empty();
                    $('#'+ev.originalTarget.id).append(ev.dataTransfer.getData("case") * caseGauche);
                }                    
        }