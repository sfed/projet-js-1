
function bars(){ 

	function getTirage(N,except){
		var temp =0;
				  do {
				  temp = (Math.floor(N*Math.random()+1));
					
				 } while (except.indexOf(temp) >= 0 );
				 except.push(temp);
				 return temp;
	}  
		
	function bar(a,x,t,h){ 
         
		ctx.beginPath();
		ctx.rect(a,x,30,2);
		ctx.fillStyle = "red";
		ctx.fill();
		
		
		if (h > 0){
			setTimeout(function(){
						bar(a,x-4,t,h-1);
						},100);
						
		}else {/* h=0 */ 
			
		ctx.font = "30px Arial";
		ctx.fillText(t,a,x-4); 
			
			}
		
		
	}	
	
	var except =[];
	var c = document.getElementById("myCanvas");
	var ctx = c.getContext("2d");
	var id,j,a;


	j=0; 
	a = 10;

	id = setInterval(function(){
							var t,h,x;   
							if (j < 7){
							
								j=j+1;
								x=250;
								t=h= getTirage(49,except);
								bar(a,x,t,h);
								
								
								a= a+40;	
								}else {
								clearInterval(id);
								}
							},5000);
	
	
			
	}			


