import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    state: () => {
        return {
            cardsToRender: [],
            newsCounter: 3,
            isSearching: false,
            haveResults: false
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
            this.haveResults = true
        },
        toggleSearch () {
            this.isSearching = !this.isSearching
        }
    }
})