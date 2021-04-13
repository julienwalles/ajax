function loadDoc() {
    var textSaisi = document.getElementById("motCle").value;

   var xhttp = new XMLHttpRequest();
  
   xhttp.onreadystatechange = function () {

       if (this.readyState === 4) {

              var x = document.createElement('img');
            //   let az = JSON.parse(this.responseText);
              x.src = this.responseText.image;
              console.log(this.responseText);
                 
              var divRight = document.getElementById("exo3");
            
               divRight.appendChild(x) ;          
       }
   };

   xhttp.open("GET","https://api.giphy.com/v1/gifs/search?api_key=iw7w8WcJlavlM6s4vd1wLEjgxsUKDMea&q="+textSaisi+"=25&offset=0&rating=g&lang=en", true);
   xhttp.send();
}
