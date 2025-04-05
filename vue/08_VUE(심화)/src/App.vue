<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <div classe="title">:: Todolist App</div>
    </div>
    <div class="card card-default card-borderless">
      <div class="card-body">
        <InputTodo @add-todo="addTodo" />
        <TodoList
          :todoList="state.todoList"
          @delete-todo="deleteTodo"
          @toggle-completed="toggleCompleted"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted } from 'vue' // composition api를 사용하기 위해서 불러옴
import InputTodo from './components/InputTodo.vue'
import TodoList from './components/TodoList.vue'
// export default {
//   name: 'App',
//   components: { InputTodo, TodoList },
// setup 함수를 등록
// setup() {
const ts = new Date().getTime() // 1. 현재 시간을 기준으로 고유한 ID 생성
const state = reactive({ todoList: [] }) // 2. 반응형 상태 정의 (todoList 배열 포함)
// 3. 마운트가 되었을 때 실행 (초기 데이터 등록)
onMounted(() => {
  state.todoList.push({ id: ts, todo: '자전거 타기', completed: false })
  state.todoList.push({ id: ts + 1, todo: '딸과 공원 산책', completed: true })
  state.todoList.push({ id: ts + 2, todo: '일요일 애견 카페', completed: false })
  state.todoList.push({ id: ts + 3, todo: 'Vue 원고 집필', completed: false })
})
// 할 일 추가
const addTodo = (todo) => {
  if (todo.length >= 2) {
    state.todoList.push({ id: new Date().getTime(), todo: todo, completed: false })
  }
}
// 할 일 삭제
const deleteTodo = (id) => {
  let index = state.todoList.findIndex((item) => id === item.id)
  state.todoList.splice(index, 1)
}
// 할 일 토글
const toggleCompleted = (id) => {
  let index = state.todoList.findIndex((item) => id === item.id)
  state.todoList[index].completed = !state.todoList[index].completed
}
//   return { state, addTodo, deleteTodo, toggleCompleted } // 템플릿에서 접근할 수 있도록 반환
// },
// }
</script>
