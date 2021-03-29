import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        cardsToRender: {},
        showPreloader: false
    },
    mutations: {
        cardsToRender: (state, connections) =>
            {state.cardsToRender = connections},
        showPreloader: (state, connections) =>
            {state.showPreloader = connections}
    }
})