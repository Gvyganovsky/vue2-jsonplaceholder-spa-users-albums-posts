<template>
    <div>
        <h2>Посты пользователя: {{ user.name }}</h2>
        <ul>
            <li v-for="post in posts" :key="post.id">
                {{ post.title }}
            </li>
        </ul>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            user: {},
            posts: [],
        };
    },
    created() {
        this.fetchPosts();
        this.fetchUserDetails();
    },
    methods: {
        async fetchUserDetails() {
            try {
                const userId = this.$route.params.id;

                const userData = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);

                this.user = userData.data;
            } catch (error) {
                console.error('Ошибка получения данных:', error);
            }
        },
        async fetchPosts() {
            try {
                const userId = this.$route.params.id;

                const postsData = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);

                this.posts = postsData.data;
            } catch (error) {
                console.error('Ошибка получения данных:', error);
            }
        },
    },
};
</script>
  