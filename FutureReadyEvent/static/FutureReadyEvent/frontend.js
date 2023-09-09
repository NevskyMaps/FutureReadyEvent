// Stylish fade in from below
document.addEventListener("scroll", function() {
  var pageTop = window.scrollY;
  var pageBottom = pageTop + window.innerHeight;
  var rows = document.querySelectorAll(".row");

  for (var i = 0; i < rows.length; i++) {
    var rowElement = rows[i];
    var tagTop = rowElement.getBoundingClientRect().top + window.scrollY;

    if (tagTop < pageBottom) {
      rowElement.classList.add("visible");
    } else {
      rowElement.classList.remove("visible");
    }
  }
});
