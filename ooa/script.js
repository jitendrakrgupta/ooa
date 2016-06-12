
function prepareEventHandlers() {
  var login_click = document.getElementById("right-top-login");
  login_click.onclick = function() {
    alert("Login...Coming Soon!!!");
  }

  var signup_click = document.getElementById("right-top-signup");
  signup_click.onclick = function() {
    alert("SignUp...Coming Soon!!!");
  }
}

window.onload = function() {
  prepareEventHandlers();
}
