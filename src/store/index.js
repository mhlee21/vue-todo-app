import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  plugins: [
    createPersistedState(),
  ],
  state: {
    todos: [],
  },
  getters: {
    allTodoCount(state) {
      return state.todos.length
    },
    completedTodoCount(state){
      return state.todos.filter(todo => {
        return todo.isCompleted
      }).length
    },
    uncompletedTodoCount(state){
      return state.todos.filter(todo => {
        return !todo.isCompleted
      }).length
    }
  },
  mutations: {
    CREATE_TODO(state, todoItem) {
      state.todos.push(todoItem)
    },
    DELETE_TODO(state, todoItem) {
      const index = state.todos.indexOf(todoItem)
      state.todos.splice(index,1)
    },
    UPDATE_TODO(state, todoItem) {
      const index = state.todos.indexOf(todoItem)
      state.todos[index].isCompleted = !state.todos[index].isCompleted
    },
  },
  actions: {
    createTodo({commit}, todoItem) {
      commit('CREATE_TODO', todoItem)
    },
    deleteTodo({commit}, todoItem) {
      commit('DELETE_TODO', todoItem)
    },
    updateTodo({commit}, todoItem) {
      commit('UPDATE_TODO', todoItem)
    }
  }
})
