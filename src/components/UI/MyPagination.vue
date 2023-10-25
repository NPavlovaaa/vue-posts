<template>
  <div class="page__wrapper">
    <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="page"
        :class="{'current-page': page === pageNumber}"
        @click="changePage(pageNumber)"
    >
      {{ pageNumber }}
    </div>
  </div>
</template>

<script>
export default {
  name: "my-pagination",
  props: {
    page: {
      type: Number,
      default: 1
    },
    totalPages: {
      type: Number
    }
  },
  methods: {
    changePage(page){
      this.$emit('changePage', page)
    }
  }
}
</script>

<style scoped>
.page__wrapper {
  display: flex;
  margin-top: 15px;
  gap: 3px;
}
.page {
  border: 1px solid black;
  padding: 5px 10px;
  border-radius: 20%;
  cursor: pointer;
  align-items: center;
}
.current-page {
  border: 2px solid teal;
}
</style>