 function subtotal_func(){
	 
	 var one = parseInt(document.getElementById("one").value);
	 var two = parseInt(document.getElementById("two").value);
	 var three = parseInt(document.getElementById("three").value);
	 var four = parseInt(document.getElementById("four").value);
	 var five = parseInt(document.getElementById("five").value);
	 var six = parseInt(document.getElementById("six").value);
	 var subtotal = (one*3333 + two*2000 + three*4000 + four*5000 + five*4000 + six*7000);
	 alert("total payable amount is " + subtotal);
	 	 
	  
	 
 }
 
	 	 
 
 var count =0;
  function fav(name) {
	
    if (count==0) {
     name.style.backgroundColor = "#FF0000";
        count=1;
    }
    else{
        name.style.backgroundColor = "#F0F0F0";
        count=0;
    }
}