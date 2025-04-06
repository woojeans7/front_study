<script setup>
defineProps(['activeTodoCount', 'completedTodoCount'])
// 이벤트 정의
const emit = defineEmits(['delete-completed'])

// 완료된 항목 삭제 이벤트 발생
function handleDeleteCompleted() {
  if (!confirm('완료된 항목을 삭제하시겠습니까?')) return
  emit('delete-completed')
}
</script>

<template>
  <!-- 등록된 리스트가 있으면 보여지도록 처리 -->
  <div class="todo-summary" v-if="activeTodoCount || completedTodoCount">
    <p>
      <span>미완료항목</span><span>{{ activeTodoCount }}</span>
    </p>
    <p>
      <span>완료항목</span><span>{{ completedTodoCount }}</span>
    </p>
    <!-- 완료 항목이 0이면 클릭되지 않도록 처리 -->
    <button @click="handleDeleteCompleted" :disabled="completedTodoCount === 0">
      완료된 항목 삭제
    </button>
  </div>
</template>

<style scoped>
.todo-summary {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: var(--space-m);
}
.todo-summary p {
  font-family: 'Noto Sans KR', sans-serif;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  gap: var(--space-s);
}
.todo-summary p:nth-of-type(1) span:nth-of-type(1) {
  color: var(--blue-dark);
}
.todo-summary span:nth-of-type(2) {
  background-color: var(--gray300);
  padding: var(--space-s);
  border-radius: var(--space-s);
  font-weight: 900;
}
.todo-summary button {
  background-color: var(--blue-dark);
}
</style>
