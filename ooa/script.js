
function prepareEventHandlers() {
  var login_click = document.getElementById("right-top-login");
  login_click.onclick = function() {
    alert("You clicked on Login");
  }

  var signup_click = document.getElementById("right-top-signup");
  signup_click.onclick = function() {
    alert("You clicked on SignUp");
  }
}

window.onload = function() {
  prepareEventHandlers();
}
