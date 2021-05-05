<template>
  <div>
    <!-- <div id="nav">
      <router-link to="/">Dashboard</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
