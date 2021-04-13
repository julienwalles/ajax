
function loadDoc() {
     var textSaisi = document.getElementById("fname").value;

    var xhttp = new XMLHttpRequest();
   
    xhttp.onreadystatechange = function () {

        if (this.readyState === 4) {
            
                document.getElementById("rec").innerText = this.responseText;          
        }
    };
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+textSaisi+"&appid=7602a2e8aac0c505880bbdac3714ce84";
    xhttp.open("GET",url, true);
    xhttp.send();
}