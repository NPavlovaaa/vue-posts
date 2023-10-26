<template>
  <div>
    <h1>Страница с постами</h1>
    <my-input v-model="searchQuery" placeholder="Поиск...."/>
    <div class="app__btns">
      <my-button>
        Создать пост
      </my-button>
      <my-select
          v-model="selectedSort"
          :options="sortOptions"
      />
    </div>
    <my-dialog v-model:show="visibleDialog">
      <post-form/>
    </my-dialog>
    <post-list
        :posts="sortedAndSearchedPosts"
        v-if="!isPostsLoading"
    />
    <h3 v-else>Загрузка...</h3>
  </div>
</template>

<script>
import PostForm from "@/components/PostForm";
import PostList from "@/components/PostList";
import MyDialog from "@/components/UI/MyDialog";
import MyButton from "@/components/UI/MyButton";
import MySelect from "@/components/UI/MySelect";
import MyInput from "@/components/UI/MyInput";
import {usePost} from "@/hooks/usePosts";
import {useSortedPost} from "@/hooks/useSortedPost";
import useSortedAndSearchedPost from "@/hooks/useSortedAndSearchedPost";

export default {
  components: {
    MyInput,
    MySelect,
    MyDialog,
    PostForm, PostList,
    MyButton,
  },
  data(){
    return{
      visibleDialog: false,
      sortOptions: [
        {value: 'title', name: 'По названию'},
        {value: 'body', name: 'По содержимому'},
      ]
    }
  },
  setup(props) {
    const {posts, isPostsLoading, totalPages} = usePost(10);
    const {sortedPosts, selectedSort} = useSortedPost(posts);
    const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPost(sortedPosts);

    return {
      posts,
      totalPages,
      isPostsLoading,
      sortedPosts,
      selectedSort,
      searchQuery,
      sortedAndSearchedPosts,
    }
  }
}

</script>

<style>
.app__btns {
  margin: 15px 0;
  display: flex;
  justify-content: space-between;
}
</style>
