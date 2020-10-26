const body = document.querySelector('body');
const treameSwitch = document.querySelector('#theme-switch-toggle');
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const localStorageItemTheme = localStorage.getItem('theme');
body.classList.add(localStorageItemTheme);
if (localStorageItemTheme === 'dark-theme') {
    treameSwitch.checked = true;
};

treameSwitch.addEventListener('change', treameChecked);

function treameChecked() {
    if (this.checked) {
        body.classList.remove(Theme.LIGHT);
        body.classList.add(Theme.DARK);
        localStorage.setItem('theme', 'dark-theme');
    }
    else {
        body.classList.remove(Theme.DARK);
        body.classList.add(Theme.LIGHT);
        localStorage.setItem('theme', 'light-theme');
    }
}