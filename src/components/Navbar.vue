<template>
  <div class="navbar">
    <div @click="$router.push('/')">Vue 3</div>
    <div class="navbar__btns">
      <my-button @click="$router.push('/posts')">Посты</my-button>
      <my-button @click="$router.push('/about')">О нас</my-button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.navbar {
  height: 50px;
  background-color: white;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 100px;
}
.navbar__btns {
  display: flex;
  margin-left: auto;
  gap: 10px;
}
</style>