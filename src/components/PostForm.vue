<template>
  <form @submit.prevent>
    <h4>Создание поста</h4>
    <input
        v-bind:value="title"
        type="text"
        placeholder="Название"
        @input="post.title=$event.target.value"
    />
    <input
        v-bind:value="body"
        type="text"
        placeholder="Описание"
        @input="post.body=$event.target.value"
    />
    <button @click="createPost">Создать</button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      post: {
        title: '',
        body: ''
      }
    }
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit('create', this.post)
      this.post = {
        title: '',
        body: ''
      }
    }
  },
}
</script>


<style>
</style>