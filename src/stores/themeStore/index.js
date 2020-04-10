import { observable, action } from 'mobx';

class ThemeStore {
    @observable selectedTheme

    constructor() {
        this.selectedTheme = "light";
    }

@action.bound
    setCurrentTheme(theme) {
        this.selectedTheme = theme;
    }
}

const themeStore = new ThemeStore();

export default themeStore;
