//Javascript function for active -

// Get the container element
var linkContainer = document.getElementById("navig");

// Get all buttons with class="navlink" inside the container
var linked = linkContainer.getElementsByClassName("navlink");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < linked.length; i++) {
  linked[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
} 

// --------- END -------