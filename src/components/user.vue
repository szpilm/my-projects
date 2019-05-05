<template>
  <div>
    <h1>User</h1>
    <div>User组件，动态部分是{{dynamicSegment}}</div>
  </div>
</template>

<script>
export default {
  computed: {
    dynamicSegment() {
      return this.$route.params.id;
    }
  }
};
</script>