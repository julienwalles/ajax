
function loadDoc() {
var xhr = new XMLHttpRequest();
xhr.open('POST', ' https://js-ajax-twitter.herokuapp.com/client.html');
xhr.onreadystatechange = function() {
  if (xhr.readyState === 4) {
    alert(xhr.responseText);
  }
};
xhr.send(JSON.stringify({message:'comment ca va ?'}));
}

// ab51ed6f-b638-42a9-969e-7ae3567323fc