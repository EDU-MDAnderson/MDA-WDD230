function toggleMenu() {
    var menuItems = document.getElementById("menu-items");
    var closeButton = document.getElementById("close-button");
    var hamburgerButton = document.getElementById("hamburger-button");
    
    if (menuItems.style.display === "block") {
      menuItems.style.display = "none";
      closeButton.style.display = "none";
      hamburgerButton.style.display = "block";
    } else {
      menuItems.style.display = "block";
      closeButton.style.display = "block";
      hamburgerButton.style.display = "none";
    }
  }