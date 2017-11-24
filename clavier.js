function makeBoard(ligne, colone) {
    var table = document.createElement("TABLE");

    for (i = 0; i < ligne; i++) {
        var tr = document.createElement("TR")

        for (j = 1; j <= colone; j++) {
            var td = document.createElement("TD")

            var temp = 7 * i + j;
            var txt = document.createTextNode(temp);
            td.appendChild(txt);
            tr.appendChild(td);

        }
        table.appendChild(tr);

    }

    // add eventlistner to a table to catch the cells selection click.
    table.addEventListener('click',
        function(ev) {
            function selected() {
                var c = 0;
                var row = table.childElementCount
                for (var i = 0; i < row; i++) {
                    var col = table.children[i].childElementCount
                    for (var j = 0; j < col; j++) {
                        var elm = table.children[i].children[j]
                        if (elm.classList.contains("checked")) {
                            c++;
                        }
                    }
                }
                return c
            }

            var td = ev.target;
            var addButton = document.getElementById("addButtonId");

            if (td.tagName == "TD") {
                if ((td.classList.contains("checked"))) {
                    td.classList.toggle("checked");
                } else if ((selected() < 6)) {
                    td.classList.toggle("checked");
                }

                if (selected() == 6) {
                    // active le bouton de confirmation
                    if (addButton.classList.contains("confirm")) {
                        addButton.classList.toggle("confirm")
                    }

                    // desactive le bouton 
                } else if (!addButton.classList.contains("confirm")) {
                    addButton.classList.toggle("confirm")
                }
            }


        }, false);

    return table;


}

function confirm() {


    // create a list out of the checked elements in the table

    function getSelected(table) {


        var ul = document.createElement("UL")
        var row = table.childElementCount

        for (var i = 0; i < row; i++) {
            var col = table.children[i].childElementCount
            for (var j = 0; j < col; j++) {
                var elm = table.children[i].children[j]
                if (elm.classList.contains("checked")) {
                    // remove the focus from the elements in the keyboard
                    elm.classList.toggle("checked")

                    // create a list
                    var li = document.createElement("LI")
                    var el = document.createTextNode(elm.innerText)
                    li.appendChild(el)
                    ul.appendChild(li)
                }
            }
        }
        // ajoute bouton supprime a la fin de la list 
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("S");
        span.setAttribute("class", "removelist")

        span.appendChild(txt);
		
		// assign une fonction au bouton suprime 
        span.addEventListener('click', function() {

            ul = this.parentNode
            var container = document.getElementById("selectionListId")
            container.removeChild(ul);
			// change le cout total de la liste de selection
			var totSelection = document.getElementById("totSelection").value
			document.getElementById("totSelection").value = parseInt(totSelection)- 10;
					

        })
        if (ul.childElementCount == 6) {
            ul.appendChild(span)
            return ul
        }




    }

    var container = document.getElementById("selectionListId")
    var table = document.getElementById("boardID").children[0]
    var ul = getSelected(table)
    container.appendChild(ul)

    // desactive le boutton addbutton
    var addButton = document.getElementById("addButtonId");
    if (!addButton.classList.contains("confirm")) {
        addButton.classList.toggle("confirm")
    }

    //active le boutton genere
    var genButton = document.getElementById("generateId");
    if (genButton.classList.contains("affiche")) {
        genButton.classList.toggle("affiche")
    }

    //active le bouton reset
    var resetButton = document.getElementById("resetButtonId");

    if (resetButton.classList.contains("affiche")) {
        resetButton.classList.toggle("affiche")
    }
   //active le bouton Jouez
    var playButton = document.getElementById("playButtonId");

    if (playButton.classList.contains("affiche")) {
        playButton.classList.toggle("affiche")
    }
	// affiche le cout total de la liste de selection
	var totSelection = document.getElementById("totSelection").value
	document.getElementById("totSelection").value = parseInt(totSelection)+ 10;


}

/*
function addToList(el, list) {

    var li = document.createElement("LI");
    var txt = document.createTextNode(el);
    li.appendChild(txt)
    list.appendChild(li)

}

function removeFromList(el, list) {

    for (i = 0; i < list.childElementCount; i++) {

        if (list.children[i].innerText == el) {

            list.removeChild(list.children[i]);

        }
    }

}
 */


function generate() {
    function getTirage(N, excepte) {
        var temp = 0;
        do {
            temp = (Math.floor(N * Math.random() + 1));

        } while (excepte.indexOf(temp) >= 0);

        excepte.push(temp);
        return temp;
    }

    var except = [];
    var td, temp = 0;

    var table = document.getElementById("boardID").children[0];
    // reset the table
    for (var i = 0; i < 7; i++) {
        for (var j = 0; j < 7; j++) {

            td = table.children[i].children[j];
            if (td.classList.contains("checked")) {
                td.classList.toggle("checked");
            }
        }




    }
     // genere les 6 nombres et les selectionne dans la table
    for (var i = 0; i < 6; i++) {
		//pour test seulement
		temp = getTirage(9, except)
		
	  
		
		

        var row = parseInt((temp - 1) / 7);
        var col = temp - 1 - (7 * row);

        var td = table.children[row].children[col];
        if (!td.classList.contains("checked")) {
            td.classList.toggle("checked");
        }

    }
    //desactive le bouton genere
    /* var genButton = document.getElementById("generateId");
    if (!genButton.classList.contains("affiche")) {
        genButton.classList.toggle("affiche")
    } */
	
    // reactive le bouton add
    var addButton = document.getElementById("addButtonId");
    if (addButton.classList.contains("confirm")) {
        addButton.classList.toggle("confirm")
    }
}


function play() {
    var totSelection = document.getElementById("totSelection").value
	
	
    var solde = document.getElementById("soldeInput").value
	var temp =solde - parseInt(totSelection)
	if ( temp >= 0) {
		
		document.getElementById("soldeInput").value	= temp	
	
	bars();
	}else {
		
		alert("vous n'avez pas assez de fond pour jouer");
	}
	


}

function reset() {
    //efface la liste des tirages
    var tiragesList = document.getElementById("selectionListId");
    while (tiragesList.childElementCount > 0) {
        tiragesList.removeChild(tiragesList.children[0])
    }
    // deactivate the reset button
    var resetButton = document.getElementById("resetButtonId");
    if (!resetButton.classList.contains("affiche")) {
        resetButton.classList.toggle("affiche")
    }

    // deactivate the play button
    var playButton = document.getElementById("playButtonId");
    if (!playButton.classList.contains("affiche")) {
        playButton.classList.toggle("affiche")
    }


    // effacer le canvas si pas vide
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    ctx.clearRect(0, 0, c.width, c.height);
	
	// mettre a zero cout total de la liste de selection
	
	document.getElementById("totSelection").value = 0;
	document.getElementById("soldeInput").value = 100;


}