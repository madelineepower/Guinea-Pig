console.log("hi");
var input = document.getElementById("keypress-input");
var output = document.getElementById("output-target");
var heading = document.getElementById("page-title");
var articleSection = document.getElementsByClassName("article-section");

// SECTION EVENT
function sectionClick(event){
  var articleText = event.target.innerHTML;
  output.innerHTML = "You clicked on the " + articleText + " section";
}
// loop through article sections
for (var i = 0; i < articleSection.length; i++) {
  articleSection.item(i).addEventListener("click", sectionClick);
}

// HEADING EVENT
function mouseoverheading(event){
  output.innerHTML = "You moved your mouse over the header";
}

function mouseoutofheading(event){
  output.innterHTML = "You left me!";
}

heading.addEventListener("mouseover", mouseoverheading);
heading.addEventListener("mouseout", mouseoutofheading);

// INPUT FIELD EVENT
input.addEventListener("keyup", function(event){
  output.innerHTML = event.target.value;
});

// GUINEA-PIG
var guineaPig = document.getElementById("guinea-pig");
var colorButton = document.getElementById("add-color");
var hulkButton = document.getElementById("make-large");
var borderButton = document.getElementById("add-border");
var roundButton = document.getElementById("add-rounding");

colorButton.addEventListener("click", function(event){
  guineaPig.classList.toggle("blue");
});

hulkButton.addEventListener("click", function(event){
  guineaPig.classList.toggle("large");
});

borderButton.addEventListener("click", function(event){
  guineaPig.classList.toggle("border");
});

roundButton.addEventListener("click", function(event){
  guineaPig.classList.toggle("round");
});
