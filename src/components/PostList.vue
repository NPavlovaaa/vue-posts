<template>
  <div v-if="posts.length > 0">
    <h3>Список постов</h3>
    <transition-group name="post-list">
      <post-item-list
          v-for="post in posts"
          :post="post"
          :key="post.id"
          @remove="$emit('remove', post)"
      />
    </transition-group>
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
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  transform: translateX(130px);
}
.post-list-move {
  transition: transform 0.4s ease;
}
</style>
