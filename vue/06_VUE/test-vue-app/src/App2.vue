<template>
  <div>
    <h2>App 컴포넌트</h2>
    <hr />
    <ul>
      <CheckBoxItem2 v-for="idol in idols" :key="idol.id" :idol="idol" />
    </ul>
  </div>
</template>

<script>
import CheckBoxItem2 from './components/CheckBoxItem2.vue'
export default {
  name: 'App',
  data() {
    return {
      idols: [
        { id: 1, name: 'BTS', checked: true },
        { id: 2, name: 'Black Pink', checked: false },
        { id: 3, name: 'EXO', checked: false },
        { id: 4, name: 'ITZY', checked: false },
      ],
    }
  },
  components: { CheckBoxItem2 }, // 전역 컴포넌트 사용 시 등록X
}
</script>

<style scoped></style>
