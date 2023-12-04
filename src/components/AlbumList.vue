<template>
    <div>
      <h2>Альбомы пользователя: {{ user.name }}</h2>
      <div v-for="album in albums" :key="album.id">
        <h3>{{ album.title }}</h3>
        <!-- Отображение фотографий из альбома -->
        <div v-for="photo in album.photos" :key="photo.id">
          <img :src="photo.thumbnailUrl" alt="Photo" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        user: {},
        albums: [],
      };
    },
    created() {
      this.fetchAlbums();
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
      async fetchAlbums() {
        try {
          const userId = this.$route.params.id;
  
          const albumsData = await axios.get(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`);
  
          this.albums = albumsData.data;
          // Для каждого альбома загружаем его фотографии
          await Promise.all(
            this.albums.map(async album => {
              const photosData = await axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${album.id}`);
              album.photos = photosData.data.slice(0, 5); // Получаем первые 5 фото из каждого альбома
            })
          );
        } catch (error) {
          console.error('Ошибка получения данных:', error);
        }
      },
    },
  };
  </script>
  