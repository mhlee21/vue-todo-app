<template>
  <div>
    <input type="text"
      v-model.trim="todoTitle"
      @keydown.enter="createTodo"
    >
    <button @click="createTodo">Add</button>
  </div>
</template>

<script>
export default {
  name: 'TodoForm',
  data() {
    return {
      todoTitle: '',
    }
  },
  methods: {
    createTodo() {
      const todoItem = {
        title: this.todoTitle,
        isCompleted: false,
        date: new Date().getTime()
      }
      if (todoItem.title) {
        this.$store.dispatch('createTodo', todoItem)
      }
      this.todoTitle = ''
    }
  }
}
</script>

<style>

</style>