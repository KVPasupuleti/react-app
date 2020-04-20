import { observable, action } from 'mobx';

class ThemeStore {
    @observable selectedTheme:string;

    constructor() {
        this.selectedTheme = "Light";
    }

    themeObject = {
        Light: {
            name: "Light",
            gameBackgroundColor: "#fff",
            gameTextColor: "black",
        },

        Dark: {
            name: "Dark",
            gameBackgroundColor: "#444f48",
            gameTextColor: "white",
        }
    }

    @action.bound
    onChangeSelectedTheme(theme: string) {
        this.selectedTheme = theme;
        console.log(this.selectedTheme)
    }
}

const themeStore = new ThemeStore();

export default themeStore;
