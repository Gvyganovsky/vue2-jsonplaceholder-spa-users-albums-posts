<template>
  <div>
    <router-view>
      <UsersList />
    </router-view>
  </div>
</template>

<script>
import UsersList from './components/UsersList.vue'

export default {
  name: 'App',
  components: {
    UsersList
  }
}
</script>

<style></style>
