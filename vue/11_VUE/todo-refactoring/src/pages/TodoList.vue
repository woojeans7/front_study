<script setup>
import FilterContainer from './FilterContainer.vue'
import InputContainer from './InputContainer.vue'
import TodoItem from '../components/TodoItem.vue'
import SummaryContainer from './SummaryContainer.vue'
import HeaderLayout from './HeaderLayout.vue'

import { computed, onMounted, ref } from 'vue'
import { useTodos } from '../api/useTodos'
const { todos, loadng, error, fetchTodos, addTodo, updateTodo, deleteTodo, deleteCompletedTodos } =
  useTodos()

const currentFilter = ref('all')

onMounted(() => {
  console.log('TodoList 마운트됨')
  fetchTodos()
})
function handleAddTodo(newTodo) {
  addTodo(newTodo)
}

function handleUpdateTodo(updatedTodo) {
  updateTodo(updatedTodo)
}
function handleDeleteTodo(todoId) {
  deleteTodo(todoId)
}

const filteredTodos = computed(() => {
  if (currentFilter.value === 'all') {
    return todos.value
  } else if (currentFilter.value === 'active') {
    return todos.value.filter((todo) => !todo.completed)
  } else if (currentFilter.value === 'completed') {
    return todos.value.filter((todo) => todo.completed)
  }
  return todos.value
})

function handleFilterChange(filter) {
  currentFilter.value = filter
}

const activeTodoCount = computed(() => {
  return todos.value.filter((todo) => !todo.completed).length
})

const completedTodoCount = computed(() => {
  return todos.value.filter((todo) => todo.completed).length
})

const handleDeleteCompletedTodos = () => {
  deleteCompletedTodos()
}
</script>

<template>
  <div>
    <HeaderLayout />
    <InputContainer @add-todo="handleAddTodo" />
    <FilterContainer @update:filter="handleFilterChange" />
    <div v-if="loadng">로딩중...</div>
    <div v-else-if="error">
      <p>에러 {{ error }}</p>
      <button @click="fetchTodos">새로고침</button>
    </div>
    <ul v-else class="todo-list">
      <TodoItem
        v-for="todo in filteredTodos"
        :key="todo.id"
        :todo="todo"
        @update:todo="handleUpdateTodo"
        @delete:todo="deleteTodo"
        @delete-completed="handleDeleteTodo"
      />
    </ul>
    <SummaryContainer
      :activeTodoCount="activeTodoCount"
      :completedTodoCount="completedTodoCount"
      @delete-completed="handleDeleteCompletedTodos"
    />
  </div>
</template>

<style scoped>
.todo-list {
  margin: var(--space-l) auto !important;
}
</style>
