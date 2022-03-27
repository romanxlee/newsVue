import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    state: () => {
        return {
            cardsToRender: [],
            newsCounter: 3
        }
    },
    getters: {
        filteredCards: (state) => state.cardsToRender.slice(0, state.newsCounter)
    },
    actions: {
        incrementNewsCounter () {
            this.newsCounter += 3
        },
        setCards (news) {
            this.cardsToRender = news
        }
    }
})