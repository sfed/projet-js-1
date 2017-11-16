function makeBoard(ligne,colone){
		var table = document.createElement("TABLE");
		for (i=0; i< ligne;i++){
		  var tr = document.createElement("TR")
		
			for (j=1; j<=colone;j++){
			 var td = document.createElement("TD")
			 
			 var temp = 7*i+j;
			 var txt =document.createTextNode(temp);
			 td.appendChild(txt);				
			 tr.appendChild(td);
			
			}
			table.appendChild(tr);
	
		}
		
		// add eventlistner to a table to catch the cells selection click.
		table.addEventListener('click', 
										function(ev) {
										
											if (ev.target.tagName == "TD") {
												var el=ev.target.innerText;
												
												var list = document.getElementById("selectID"); 
												
												// ajouter une fois une liste ul pour contenir la selection des numeros et le bouton caché
												
												if (!list.contains(list.getElementsByTagName("UL")[0]) ){
													var ul = document.createElement("UL")
													list.appendChild(ul)
												    													
												} 
												list = list.children[0]
																							
												if (ev.target.classList.contains("checked")) { // clicker sur un numero deja selectioné: enlever de la list
														if (list.childElementCount == 6){  // enlever laffichage du bouton si c'est le sixieme element que on veut enlever
																
																if (list.parentNode.children[1]) {list.parentNode.children[1].classList.toggle("confirmBtn")}
																}
														removeFromList(el,list);
														ev.target.classList.toggle("checked");	
														
													}else // ajouter le numero a la list si n est pas selectionneé avant et le selectionner
														if (list.childElementCount <6) {
																	addToList(el,list);
																	ev.target.classList.toggle("checked");	
																	
																	if (list.childElementCount == 6){ // affiche le bouton si c'est le dernier elemnt que on a ajouter
																	
																		if (list.parentNode.children[1]) {list.parentNode.children[1].classList.toggle("confirmBtn")}
																	}
												}
												
												if (list.childElementCount == 6) { 
													
												    if (!list.parentNode.contains(list.parentNode.getElementsByTagName("SPAN")[0])){
														var span = document.createElement("SPAN")
														 var txt = document.createTextNode("+");
														 span.appendChild(txt);
														 span.addEventListener('click', ajouteATirage )
														 list.parentNode.appendChild(span);
														
									
													}
												
													
												}
													
															
											}	
												
											
										
										
											
											
											
											
										  
						}, false);
		
		return table;
		
		
	}
	
		

	
	function addToList(el,list){
		
		var li=document.createElement("LI");
		var txt = document.createTextNode(el);
		li.appendChild(txt)
		list.appendChild(li)
		
	}
	
	function removeFromList(el,list){
	
		for (i=0;i<list.childElementCount;i++){
			
				if (list.children[i].innerText == el ) {
				
				list.removeChild(list.children[i]);
				
				}
			}
	
	}

 function ajouteATirage() {
	var sourceList = document.getElementById("selectID");
	var tiragesList = document.getElementById("selectListID");
	
	sourceList.lastElementChild.classList.toggle("confirmBtn")
	
	//var ul = document.createElement("UL")
	
	var ul = sourceList.children[0]
	
	 //enleve la selection et transfert vers la liste des selections
	
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("-");
	
	span.appendChild(txt);
	
	ul.appendChild(span)	
	
	tiragesList.appendChild(ul)
	
	// remove the focus from the elements inn the keyboard
	var length = ul.childElementCount
	
	for (i=0;i< length;i++){
		
		txt = ul.children[i]
		
		var row = parseInt(txt/7);
		var  col = (txt%7)-1;
		
		var table = document.getElementById("boardID").children[0];
				
		var	td = table.children[row].children[col];
		if (td.classList.contains("checked")){
				
			td.classList.toggle("checked");
		}				
	
	}
	
	sourceList.removeChild(ul);
	
	
	
	
	
	span.addEventListener('click', function(ev){
									ul = ev.target.parentNode
									tiragesList.removeChild(ul);
									
									})
		
	
	
 }
 
 function numeroGagnants( tirage) {
 
	function benefice(){ return 0}
	function debit() { return true}
	if (bedit()){
		 var tiragesList = document.getElementById("selectListID");
		 var ul, li,numero, count=0 ;
		 
		 for (i=0;i< tiragesList.childElementCount;i++) {
			ul = tiragesList.children[i];
			for (j=0; j< ul.childElementCount;j++){
				li= ul.children[j];
				numero = li.innerText
				//verifie si le chiffre existe dans  tirage 
				
				if (tirage.indexOf(numero) != -1 ){
				
					count = count +1;
				  // make the number checked in the lists
				   li.classList.toggle("checked")
				
				
					
					 
				}
				
			
			}
			benefice()
			count =0;
		 }
	 }
  
 }