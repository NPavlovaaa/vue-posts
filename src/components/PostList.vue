<template>
  <div>
    <h3>Список постов</h3>
    <post-item-list
        v-for="post in posts"
        :post="post"
        :key="post.id"
    />
  </div>
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
</style>
