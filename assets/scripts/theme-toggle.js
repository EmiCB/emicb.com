// Theme toggle functionality
(function() {
  const themeToggleButton = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  const storageKey = 'theme-preference';
  const darkThemeValue = 'dark';
  const lightThemeValue = 'light';
  
  // Get the saved theme from localStorage or default to light
  function getSavedTheme() {
    return localStorage.getItem(storageKey) || lightThemeValue;
  }
  
  // Apply the theme to the HTML element
  function applyTheme(theme) {
    if (theme === darkThemeValue) {
      htmlElement.setAttribute('data-theme', darkThemeValue);
    } else {
      htmlElement.removeAttribute('data-theme');
    }
  }
  
  // Save the theme preference to localStorage
  function saveTheme(theme) {
    localStorage.setItem(storageKey, theme);
  }
  
  // Toggle between light and dark themes
  function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === darkThemeValue ? lightThemeValue : darkThemeValue;
    
    applyTheme(newTheme);
    saveTheme(newTheme);
  }
  
  // Initialize theme on page load
  const savedTheme = getSavedTheme();
  applyTheme(savedTheme);
  
  // Add click event listener to the toggle button
  if (themeToggleButton) {
    themeToggleButton.addEventListener('click', toggleTheme);
  }
})();
