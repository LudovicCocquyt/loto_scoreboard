function displayMenu() {
    var menu = document.getElementsByClassName("menu");
    if (menu[0].hasAttribute('hidden')) {
        menu[0].removeAttribute('hidden', '');
    } else {
        menu[0].setAttribute('hidden', '');
    }
}

