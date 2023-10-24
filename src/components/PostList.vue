<template>
  <div v-if="posts.length > 0">
    <h3>Список постов</h3>
    <post-item-list
        v-for="post in posts"
        :post="post"
        :key="post.id"
        @remove="$emit('remove', post)"
    />
  </div>
  <h3 v-else class="empty">Постов нет</h3>
</template>

<script>
import PostItemList from "@/components/PostItemList";

export default {
  components: {PostItemList},
  props: {
     posts: {
       type: Array,
       require: true
     }
  },
  methods: {}
}
</script>


<style scoped>
h3{
  margin-top: 20px;
}
.empty{
  color: teal;
}
</style>
