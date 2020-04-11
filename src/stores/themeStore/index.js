import { observable, action } from 'mobx';

class ThemeStore {
    @observable selectedTheme

    constructor() {
        this.selectedTheme = "light";
    }

<<<<<<< HEAD
    @action.bound
=======
@action.bound
>>>>>>> ee748dee827784eff634dde62cf0069c9937cd00
    setCurrentTheme(theme) {
        this.selectedTheme = theme;
    }
}

const themeStore = new ThemeStore();

export default themeStore;
