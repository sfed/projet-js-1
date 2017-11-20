function numerosGagnant(tirage) {
    var total = 0;

    function calculeProfit(combine) {

        for (var i = 0; i < combine.length; i++) {

            total = total + combine[i]


        }
    }

    function debit() {

        return true

    }


    if (debit()) {
        var tiragesList = document.getElementById("selectionListId");
        var ul, li, numero;
        var comb = [];

        // remove selection from all numbers of the list
        for (i = 0; i < tiragesList.childElementCount; i++) {
            ul = tiragesList.children[i];

            // verifie les numeros qui figure dans le tirage
            for (j = 0; j < ul.childElementCount; j++) {
                li = ul.children[j];
                numero = parseInt(li.innerText)
                if (li.classList.contains("checked")) {
                    li.classList.toggle("checked");
                }

            }

        }

        for (i = 0; i < tiragesList.childElementCount; i++) {
            ul = tiragesList.children[i];
            var count = 0
                // verifie les numeros qui figure dans le tirage
            for (j = 0; j < ul.childElementCount; j++) {
                li = ul.children[j];
                numero = parseInt(li.innerText)

                //verifie si le chiffre existe dans  tirage 

                if (tirage.indexOf(numero) >= 0) {

                    count = count + 1;

                    // make the number checked in the lists
                    li.classList.toggle("checked")

                }


            }
            comb.push(count)

        }

        calculeProfit(comb)
    }

}




function bars() {

    function getTirage(N, except) {
        var temp = 0;
        do {
            temp = (Math.floor(N * Math.random() + 1));

        } while (except.indexOf(temp) >= 0);
        except.push(temp);
        return temp;
    }

    function bar(a, x, t, h) {

        ctx.beginPath();
        ctx.rect(a, x, 30, 2);
        ctx.fillStyle = "red";
        ctx.fill();


        if (h > 0) {
            setTimeout(function() {
                bar(a, x - 4, t, h - 1);
            }, 100);

        } else { /* h=0 */

            ctx.font = "30px Arial";
            ctx.fillText(t, a, x - 4);

        }


    }

    var except = [];
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    // effacer le canvas si 
    ctx.clearRect(0, 0, c.width, c.height);
    var id, j, a;


    j = 0;
    a = 10;

    id = setInterval(function() {
        var t, h, x;
        if (j < 6) {

            j = j + 1;
            x = 250;
            t = h = getTirage(49, except);
            bar(a, x, t, h);


            a = a + 40;
        } else {
            clearInterval(id);
            numerosGagnant(except)
        }
    }, 500);



}