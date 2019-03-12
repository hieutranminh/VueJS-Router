import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  // strict: true,
  state: {
    dataTodo: [],
    checked: false,
    filter: 'all'
  },
  getters: {
  },
  mutations: {
    setData (state, data) {
      state.dataTodo = data
    },
    addTodo (state, todo) {
      state.dataTodo.push({
        'id': (state.dataTodo.length) + (Math.random() * 200) + 2000,
        'title': todo,
        'completed': false
      })
    },
    changeCompleted (state, index) {
      state.dataTodo[index].completed = !state.dataTodo[index].completed
    }
  },
  actions: {
    GET_DATA: function (context) {
      axios.get('http://localhost:3000/data').then((res) => {
        context.commit('setData', res.data)
      }).catch((err) => {
        console.log(err)
      })
    },
    ADD_DATA: function (context, event) {
      context.commit('addTodo', event)
    }
  }
})
