import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cardsToRender: [],
        newsCounter: 3
    },
    mutations: {
        cardsToRender: (state, connections) =>
            {state.cardsToRender = connections},
        incrementNewsCounter (state) {
            state.newsCounter += 3
        }
    },
    getters: {
        filteredCards: state => {
            return state.cardsToRender.slice(0, state.newsCounter)
        }
    }
})