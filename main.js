function toggleMode() {
    const modeToggleBtn = document.querySelector('.modeToggle');
    const currentMode = document.documentElement.getAttribute('data-mode');
    const newMode = currentMode === 'light' ? 'dark' : 'light';

    document.documentElement.setAttribute('data-mode', newMode);

    if (newMode === 'dark') {
        modeToggleBtn.textContent = 'Light mode';
        setDarkMode();
    } else {
        modeToggleBtn.textContent = 'Dark mode';
        setLightMode();
    }

    // Store the current mode in localStorage
    localStorage.setItem('mode', newMode);
}

// Function to set dark mode
function setDarkMode() {
    
    document.documentElement.style.setProperty('--backgroud-color', 'rgb(80, 80, 80)');
    document.documentElement.style.setProperty('--main-background-start', 'rgb(80, 80, 80)');
    document.documentElement.style.setProperty('--main-background-end', 'rgb(120, 120, 120)');
    document.documentElement.style.setProperty('--header-background-start', 'rgb(50, 50, 50)');
    document.documentElement.style.setProperty('--header-background-end', 'rgb(80, 80, 80)');
    document.documentElement.style.setProperty('--nav-background-start', 'rgb(20, 20, 20)');
    document.documentElement.style.setProperty('--nav-background-end', 'rgb(50, 50, 50)');
    document.documentElement.style.setProperty('--button-background-start', 'rgb(20, 20, 20)');
    document.documentElement.style.setProperty('--button-background-end', 'rgb(50, 50, 50)');
    document.documentElement.style.setProperty('--button-hover-background-start', 'rgb(30, 30, 30)');
    document.documentElement.style.setProperty('--button-hover-background-end', 'rgb(60, 60, 60)');
}

// Function to set light mode
function setLightMode() {
    document.documentElement.style.setProperty('--backgroud-color', 'rgb(80, 80, 80)');
    document.documentElement.style.setProperty('--main-background-start', 'rgb(0, 160, 255)');
    document.documentElement.style.setProperty('--main-background-end', 'rgb(0, 225, 255)');
    document.documentElement.style.setProperty('--header-background-start', 'rgb(255, 160,255 )');
    document.documentElement.style.setProperty('--header-background-end', 'rgb(0, 160, 255)');
    document.documentElement.style.setProperty('--nav-background-start', 'rgb(160, 80, 255)');
    document.documentElement.style.setProperty('--nav-background-end', 'rgb(255, 160, 255)');
    document.documentElement.style.setProperty('--button-background-start', 'rgb(155, 80, 255)');
    document.documentElement.style.setProperty('--button-background-end', 'rgb(250, 160, 255)');
    document.documentElement.style.setProperty('--button-hover-background-start', 'rgb(155, 80, 245)');
    document.documentElement.style.setProperty('--button-hover-background-end', 'rgb(250, 160, 245)');

}
