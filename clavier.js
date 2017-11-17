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
                    // affiche le bouton de confirmation
                    if (addButton.classList.contains("confirm")) {
                        addButton.classList.toggle("confirm")
                    }

                    // cache le boutton
                } else if (!addButton.classList.contains("confirm")) {
                    addButton.classList.toggle("confirm")
                }
            }


        }, false);

    return table;


}

function confirm() {


    // create a list out of the elements

    function listOfselected(table) {


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

        var span = document.createElement("SPAN");
        var txt = document.createTextNode("-");

        span.appendChild(txt);
        span.addEventListener('click', function() {

            ul = this.parentNode
            var container = document.getElementById("selectionId")
            container.removeChild(ul);

        })
        if (ul.childElementCount == 6) {
            ul.appendChild(span)
            return ul
        }




    }

    var container = document.getElementById("selectionId")
    var table = document.getElementById("boardID").children[0]
    container.appendChild(listOfselected(table))


}

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


function numeroGagnants(tirage) {

    function benefice() { return 0 }

    function debit() { return true }
    if (bedit()) {
        var tiragesList = document.getElementById("selectListID");
        var ul, li, numero, count = 0;

        for (i = 0; i < tiragesList.childElementCount; i++) {
            ul = tiragesList.children[i];
            for (j = 0; j < ul.childElementCount; j++) {
                li = ul.children[j];
                numero = li.innerText
                    //verifie si le chiffre existe dans  tirage 

                if (tirage.indexOf(numero) != -1) {

                    count = count + 1;
                    // make the number checked in the lists
                    li.classList.toggle("checked")




                }


            }
            benefice()
            count = 0;
        }
    }

}