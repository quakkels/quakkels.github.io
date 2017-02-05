var Menu = function (window, navElement, menuButton, mobileSize) {
    this.window = window;
    this.navElement = navElement;
    this.menuButton = menuButton;
    this.mobileSize = mobileSize;

    this.menuButton.onclick = this.toggle.bind(this);
};

Menu.prototype.toggle = function() {
    var className = this.navElement.className;
    if (!className) {
        this.toggleOpen();
    } else {
        this.toggleClose();
    }
};

Menu.prototype.toggleOpen = function toggleOpen() {
    if (!this.getIsMobile()) {
        return;
    }

    this.navElement.className = "open";
};

Menu.prototype.toggleClose = function toggleClose() {
    this.navElement.className = "";
};

Menu.prototype.getIsMobile = function getIsMobile() {
    if (this.window.innerWidth <= this.mobileSize) {
        return true;
    }
    return false;
};