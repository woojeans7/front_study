<template>
  <div>
    <h2>App 컴포넌트</h2>
    <hr />
    <ul>
      <CheckBoxItem
        v-for="idol in idols"
        :key="idol.id"
        :name="idol.name"
        :checked="idol.checked"
      />
    </ul>
  </div>
</template>

<script>
import CheckBoxItem from './components/CheckBoxItem.vue' // 전역 컴포넌트로 불러오면 import할 필요없음.
export default {
  name: 'App',
  data() {
    return {
      idols: [
        { id: 1, name: 'BTS', checked: true },
        { id: 2, name: 'Black Pink' },
        { id: 3, name: 'EXO' },
        { id: 4, name: 'ITZY' },
      ],
    }
  },
  components: { CheckBoxItem }, // 전역 컴포넌트 사용 시 등록X
}
</script>

<style scoped></style>
