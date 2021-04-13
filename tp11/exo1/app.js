function loadDoc() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "https://httpbin.org/ip", true);
    xhttp.onreadystatechange = function () {

        if (this.readyState === 4) {
            let az = JSON.parse(this.responseText);
            alert(az.origin);
        }
    };
    
    xhttp.send();
}