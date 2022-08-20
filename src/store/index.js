import {defineStore} from "pinia";

export const useWindowWidthStore = defineStore('windowWidth', {
    state: () => ({
        windowWidth: window.innerWidth
    }),
    getters: {
      getWindowWidth: (state) => state.windowWidth
    },
    actions: {
        setWindowWidth() {
            this.state.windowWidth = window.innerWidth;
        }
    }
})