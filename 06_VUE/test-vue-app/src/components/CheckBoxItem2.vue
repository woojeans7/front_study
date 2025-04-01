<script>
export default {
  name: 'CheckBoxItem',
  props: ['idol'],
}
</script>

<template>
  <li><input type="checkbox" :checked="idol.checked" />{{ idol.name }}</li>
</template>

<style scoped></style>
