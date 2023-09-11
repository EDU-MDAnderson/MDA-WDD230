// getDates.js

// Function to update the copyright year
function updateCopyrightYear() {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;
  }
  
  // Function to update the last modified date
  function updateLastModifiedDate() {
    const lastModifiedElement = document.getElementById('lastModified');
    lastModifiedElement.textContent = `Last modified: ${document.lastModified}`;
  }
  
  // Call the functions to update the year and last modified date
  updateCopyrightYear();
  updateLastModifiedDate();
  