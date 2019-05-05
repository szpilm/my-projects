<template>
  <div>
    <h1>Home</h1>
    <!-- <p>{{msg}}</p> -->
    <p>
      <router-link to="/home/phone">手机</router-link>
      <router-link to="/home/tablet">平板</router-link>
      <router-link to="/home/computer">电脑</router-link>
    </p>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  /* data() {
    return {
      msg: "这是Home页"
    };
  } */
};
</script>