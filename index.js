function openSection(evt, sectionTitle) {
  // Declare all variables
  let i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove("active");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  document.getElementById(sectionTitle).style.display = "block";
  evt.currentTarget.className += " active";
}

// Set the default tab to be active when the page loads
document.getElementById("AboutMe").style.display = "block";
document.getElementsByClassName("tablinks")[0].classList.add("active");

document.addEventListener("DOMContentLoaded", function() {
  const bgVid = document.querySelector("#background-video");

  if (bgVid) {
    document.body.addEventListener("click", function() {
      if (bgVid.paused) {
        bgVid.play();
      }
    })
  }
})

