function loadDoc() {
  var textSaisi = document.getElementById("motCle").value;

  var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {

    if (this.readyState === 4) {

      var divRight = document.getElementById("exo3");

      let az = JSON.parse(this.responseText);
      for (i = 0; i < az.data.length; i++) {
        var x = document.createElement('img');
        x.src = az.data[i].images["480w_still"].url;
        divRight.appendChild(x);
      }
    }
  };
  xhttp.open("GET", "https://api.giphy.com/v1/gifs/search?api_key=iw7w8WcJlavlM6s4vd1wLEjgxsUKDMea&q=" + textSaisi + 
  "&offset=0&rating=g&lang=en", true);
  xhttp.send();
}