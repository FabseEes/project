function pwAbfrage() {
  var password = 'kroat1en';
  var passwordCheck = document.getElementById('pwinput').value;
  if (passwordCheck == password) {
    document.getElementById('error').innerHTML = "RICHTIGES PASSWORT";
    document.getElementById('error').style.color = "green";
    document.getElementById('pwinput').type = "text";
  } else {
    document.getElementById('error').style.color = "rgba(255, 0, 0, 0.7)";
    document.getElementById('pwinput').value = '';
    document.getElementById('error').innerHTML = "FALSCHES PASSWORT";
  }
}

function enter() {
  document.getElementById('pwinput').type = "password";
  if (event.keyCode === 13) {
    pwAbfrage();
  }
}
