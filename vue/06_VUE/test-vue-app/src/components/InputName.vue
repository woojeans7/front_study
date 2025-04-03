<script>
export default {
  name: 'InputName',
  emits: {
    nameChanged: (e) => {
      return e.name && typeof e.name === 'string' && e.name.trim().length >= 3 ? true : false
    },
  },
  data() {
    return {}
  },
}
</script>

<template>
  <label>이름: <input type="text" v-model="name" /></label>
  <button @click="$emit('nameChanged', { name })">이벤트 발신</button>
</template>

<style scoped></style>
