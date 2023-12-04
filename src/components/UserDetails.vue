<template>
    <div>
        <h2>Детали пользователя</h2>
        <p>Имя пользователя: {{ user.name }}</p>
    </div>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            user: {},
        };
    },
    created() {
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
    },
};
</script>
  