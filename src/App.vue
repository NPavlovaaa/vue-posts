<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <div class="app__btns">
      <my-button @click="showDialog">
        Создать пользователя
      </my-button>
    </div>
    <my-dialog v-model:show="visibleDialog">
      <post-form @create="createPost"/>
    </my-dialog>
    <post-list
        :posts="posts"
        @remove="removePost"
    />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";

export default {
  components: {
    MyDialog,
    PostForm,
    PostList,
    MyButton
  },
  data(){
    return{
      posts: [
        {id: 1, title: 'JavaScript 1', body: 'Описание поста 1'},
        {id: 2, title: 'JavaScript 2', body: 'Описание поста 2'},
        {id: 3, title: 'JavaScript 3', body: 'Описание поста 3'},
      ],
      visibleDialog: false
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
    }
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
