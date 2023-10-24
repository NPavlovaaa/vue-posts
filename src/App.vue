<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <div class="app__btns">
      <my-button @click="showDialog">
        Создать пост
      </my-button>
    </div>
    <my-dialog v-model:show="visibleDialog">
      <post-form @create="createPost"/>
    </my-dialog>
    <post-list
        :posts="posts"
        @remove="removePost"
        v-if="!isPostLoading"
    />
    <h3 v-else>Загрузка...</h3>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";
import axios from "axios";

export default {
  components: {
    MyDialog,
    PostForm,
    PostList,
    MyButton
  },
  data(){
    return{
      posts: [],
      visibleDialog: false,
      isPostLoading: false
    }
  },
  methods: {
    createPost(post){
      this.posts.push(post);
      this.visibleDialog = false;
    },
    removePost(post){
      this.posts = this.posts.filter(item => item.id !== post.id);
    },
    showDialog(){
      this.visibleDialog = true;
    },
    async fetchPosts(){
      try {
        this.isPostLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
        this.posts = response.data;
      } catch (e){
        alert(e.message)
      } finally {
        this.isPostLoading = false;
      }
    }
  },
  mounted() {
    this.fetchPosts();
  }
}

</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app {
  padding: 50px 100px;
}
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
</style>
