import {ref, computed} from 'vue'

export default function useSortedAndSearchedPost(sortedPosts) {
    const searchQuery = ref('')

    const sortedAndSearchedPosts = computed(() => {
        console.log(sortedPosts);
        return sortedPosts.value.filter(post => post.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
    })

    return {
        searchQuery, sortedAndSearchedPosts
    }
};