<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
nav {
  font-family: Roboto;
  display: flex;
  padding-left: 10px;
  align-items: center;
  gap: 10px;
  height: 50px;

  a {
    font-weight: bold;
    color: #251b62;
    &.router-link-exact-active {
      color: #4534aa;
    }
  }
}
</style>
