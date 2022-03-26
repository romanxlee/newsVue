import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    state: () => {
        return {
        cardsToRender: [],
        newsCounter: 3
        }
    },
    mutations: {
        cardsToRender: (state, connections) =>
            {state.cardsToRender = connections},
        incrementNewsCounter (state) {
            state.newsCounter += 3
        }
    },
    getters: {
        filteredCards: (state) => state.cardsToRender.slice(0, state.newsCounter)
    }
})