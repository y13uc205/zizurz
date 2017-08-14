var request = new XMLHttpRequest();
  request.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.response);
		document.getElementById("des_1").innerHTML = data[0].name + "<br>" + data[0].price;
		document.getElementById("des_2").innerHTML = data[1].name + "<br>" + data[1].price;
		document.getElementById("des_3").innerHTML = data[2].name + "<br>"  + data[2].price;
		document.getElementById("des_4").innerHTML = data[3].name + "<br>" + data[3].price;
		document.getElementById("des_5").innerHTML = data[4].name + "<br>" + data[4].price;
		document.getElementById("des_6").innerHTML = data[5].name + "<br>" + data[5].price;
		document.getElementById("image1").src = data[0].img;
		document.getElementById("image2").src = data[1].img;
		document.getElementById("image3").src = data[2].img;
		document.getElementById("image4").src = data[3].img;
		document.getElementById("image5").src = data[4].img;
		document.getElementById("image6").src = data[5].img;
		
    }
  };
  request.open("GET", "https://raw.githubusercontent.com/apurvamathur16/zizurz/master/lamps/lamps.json", true);
  request.send();
