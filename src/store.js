import { createStore } from 'vuex'
import axios from 'axios'
const store = createStore({
  state: {
    url: 'https://api.github.com/users/',
    user: null,
    repositories: null,
    error: null,
  },
  mutations: {
    userInfo(state, data) {
      state.user = data
      state.error = null
    },
    userReset(state) {
      state.user = null
      state.error = null
    },
    userError(state, error) {
      state.error = error.response.data.message
    },
    reposInfo(state, repos) {
      state.repositories = repos
    },
  },
  actions: {
    async userInfo({ commit, state }, search) {
      try {
        const res = await axios.get(`${state.url}${search}`)
        const repos = await axios.get(`${state.url}${search}/repos`)
        commit('userInfo', res.data)
        commit('reposInfo', repos.data)
      } catch (error) {
        commit('userError', error)
        console.clear()
        state.user = null
      }
    },
  },
  getters: {},
})

export default store
