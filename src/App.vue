<template>
  <post-form @create="createPost"/>
  <post-list :posts="posts"/>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";

export default {
  components: {
    PostForm,
    PostList
  },
  data(){
    return{
      posts: [
        {id: 1, title: 'JavaScript 1', body: 'Описание поста 1'},
        {id: 2, title: 'JavaScript 2', body: 'Описание поста 2'},
        {id: 3, title: 'JavaScript 3', body: 'Описание поста 3'},
      ]
    }
  },
  methods: {
    createPost(post) {
      this.posts.push(post)
    }
  }
}

</script>

<style>
</style>
