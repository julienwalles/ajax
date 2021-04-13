
function loadDoc() {
     var textSaisi = document.getElementById("fname").value;

    var xhttp = new XMLHttpRequest();
   
    xhttp.onreadystatechange = function () {

        if (this.readyState === 4) {
            var rec = document.getElementById("rec");
            var data = JSON.parse(this.responseText);
            var newLi = document.createElement("li");
            var img = document.createElement("img");
            var ph1 = "A" + " " + textSaisi +" " + "la T° est de: "
            var temp = data.main.temp; 
            img.src = data.weather[0].icon;     
            newLi.append( ph1 + temp + img.src);
            rec.appendChild(newLi);         
        }
    };
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+textSaisi+"&appid=7602a2e8aac0c505880bbdac3714ce84"+"&units=metric";
    xhttp.open("GET",url, true);
    xhttp.send();
}

