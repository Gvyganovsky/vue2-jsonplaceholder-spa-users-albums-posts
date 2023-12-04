<template>
    <ul class="User-list">
        <li v-for="user in users" :key="user.id" class="User-list__item">
            <router-link :to="{ name: 'UserDetails', params: { id: user.id } }" class="User-list__link">
                <p class="User-list__num">{{ user.id }}</p>
                <p class="User-list__name">{{ user.name }}</p>
            </router-link>
        </li>
    </ul>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            users: [],
        };
    },
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.users = response.data;
            })
            .catch(error => {
                console.error('Ошибка при получении данных:', error);
            });
    },
};
</script>
  

<style scoped>
.User-list {
    align-items: center;
    max-width: 450px;

    margin: 0 auto;
    padding: 0;
    list-style-type: none;
}

.User-list__item {
    width: 400px;
    margin: 0 auto;
}

.User-list__link {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: black;
}

.User-list__num {
    font-size: 18px;
    font-weight: bold;
    margin: 0 16px;
}

.User-list__name {
    font-size: 18px;
    margin: 8px;
}
</style>