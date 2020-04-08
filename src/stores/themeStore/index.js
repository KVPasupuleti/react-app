import { observable } from 'mobx';

class ThemeStore {
    @observable selectedTheme

    constructor() {
        this.selectedTheme = "light";
    }

    setCurrentTheme(theme) {
        this.selectedTheme = theme;
    }
}

const themeStore = new ThemeStore();

export default themeStore;
