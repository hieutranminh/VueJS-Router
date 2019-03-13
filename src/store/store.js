import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    dataTodo: [],
    filter: 'all',
    check: true
  },
  getters: {
    filterAll: state => {
      if (state.filter === 'all') {
        return state.dataTodo
      } else if (state.filter === 'active') {
        return state.dataTodo.filter(todo => !todo.completed)
      } else if (state.filter === 'done') {
        return state.dataTodo.filter(todo => todo.completed)
      } else {
        return state.dataTodo
      }
    }
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
    deleteTodo (state, index) {
      state.dataTodo.splice(index, 1)
    },
    saveTodo (state, arr) {
      state.dataTodo[arr[0]].title = arr[1]
    },
    changeCompleted (state, index) {
      state.dataTodo[index].completed = !state.dataTodo[index].completed
    },
    filterTodo (state, value) {
      if (value === 'all') {
        state.filter = 'all'
      } else if (value === 'active') {
        state.filter = 'active'
      } else if (value === 'done') {
        state.filter = 'done'
      }
    },
    selectAllTodo (state, check) {
      state.check = check
      state.dataTodo.filter(todo => {
        if (todo.completed !== check) {
          todo.completed = check
        }
      })
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
