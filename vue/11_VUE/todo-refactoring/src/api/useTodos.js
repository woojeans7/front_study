import axios from 'axios'
import { ref } from 'vue'

const API_URL = 'http://localhost:5001/todos'

export const useTodos = () => {
  const todos = ref([])
  const loadng = ref(false)
  const error = ref(null)

  const fetchTodos = async () => {
    loadng.value = true
    error.value = null

    try {
      // 지연상태 확인
      // await new Promise(resolve => setTimeout(resolve, 2000))

      const response = await axios.get(API_URL)
      // console.log('response---', response)
      todos.value = response.data
    } catch (err) {
      error.value = err.message || '데이터 요청 중 에러'
      console.error(err)
    } finally {
      loadng.value = false
    }
  }

  // 데이터 등록하기
  const addTodo = async (newTodo) => {
    try {
      const response = await axios.post(API_URL, newTodo)
      todos.value.push(response.data)
    } catch (err) {
      console.log(err)
    }
  }

  // todo 항목 업데이트
  const updateTodo = async (updatedTodo) => {
    try {
      const response = await axios.put(`${API_URL}/${updatedTodo.id}`, updatedTodo)
      console.log('response---', response)
      const index = todos.value.findIndex((todo) => todo.id === updatedTodo.id)

      if (index !== -1) todos.value[index] = updatedTodo
    } catch (err) {
      console.log(err)
    }
  }

  // todo 리스트 삭제하기
  const deleteTodo = async (todoId) => {
    try {
      await axios.delete(`${API_URL}/${todoId}`)
      todos.value = todos.value.filter((todo) => todo.id !== todoId)
      // return true
    } catch (err) {
      console.log(err)
      // return false
    }
  }

  // 일괄삭제 함수
  const deleteCompletedTodos = async () => {
    try {
      const completedTodos = todos.value.filter((todo) => todo.completed)

      const deletePromises = completedTodos.map((todo) => axios.delete(`${API_URL}/${todo.id}`))

      await Promise.all(deletePromises)

      todos.value = todos.value.filter((todo) => !todo.completed)
    } catch (err) {
      error.value = err.message || '완료된 항목 삭제 중 오류 발생'
      console.error('완료된 항목 삭제 중 오류 발생:', err)
    }
  }

  return {
    todos,
    loadng,
    error,
    fetchTodos,
    addTodo,
    updateTodo,
    deleteTodo,
    deleteCompletedTodos,
  }
}
