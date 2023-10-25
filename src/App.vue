<template>
  <div class="app">
    <h1>Страница с постами</h1>
    <my-input v-model="search" placeholder="Поиск...."/>
    <div class="app__btns">
      <my-button @click="showDialog">
        Создать пост
      </my-button>
      <my-select
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="visibleDialog">
      <post-form @create="createPost"/>
    </my-dialog>
    <post-list
        :posts="searchedPosts"
        @remove="removePost"
        v-if="!isPostLoading"
    />
    <h3 v-else>Загрузка...</h3>
    <my-pagination
        :page="page"
        :total-pages="totalPages"
        @changePage="changePage"
    />
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";
import axios from "axios";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import MyPagination from "@/components/UI/MyPagination";

export default {
  components: {
    MyPagination,
    MyInput,
    MySelect,
    MyDialog,
    PostForm,
    PostList,
    MyButton
  },
  data(){
    return{
      posts: [],
      visibleDialog: false,
      isPostLoading: false,
      selectedSort: '',
      search: '',
      page: 1,
      limit: 10,
      totalPages: 0,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
      ]
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
    changePage(pageNumber) {
      this.page = pageNumber
    },
    async fetchPosts(){
      try {
        this.isPostLoading = true;
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
          params: {
            _page: this.page,
            _limit: this.limit
          }
        });
        this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit);
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
  },
  computed: {
    sortedPosts(){
      return [...this.posts].sort((post1, post2) => (post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])))
    },
    searchedPosts(){
      return this.sortedPosts.filter(item => item.title.toLowerCase().includes(this.search.toLowerCase()))
    }
  },
  watch: {
    page() {
      this.fetchPosts()
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
