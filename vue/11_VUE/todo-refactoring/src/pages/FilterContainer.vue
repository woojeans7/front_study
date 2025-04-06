<script setup>
import { ref } from 'vue'
const currentFilter = ref('all')

const emit = defineEmits(['update:filter'])
function setFilter(filter) {
  currentFilter.value = filter
  emit('update:filter', filter)
}
</script>

<template>
  <div class="filter-container">
    <button
      :class="{ active: currentFilter === 'all' }"
      @click="setFilter('all')"
    >
      전체
    </button>
    <button
      :class="{ active: currentFilter === 'active' }"
      @click="setFilter('active')"
    >
      미완료
    </button>
    <button
      :class="{ active: currentFilter === 'completed' }"
      @click="setFilter('completed')"
    >
      완료
    </button>
  </div>
</template>

<style scoped>
/*필터 탭 filter-container */
.filter-container {
  display: flex;
  gap: var(--space-m);
}
</style>
