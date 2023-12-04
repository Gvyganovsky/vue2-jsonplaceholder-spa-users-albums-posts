import Vue from 'vue';
import VueRouter from 'vue-router';
import UsersList from '@/components/UsersList.vue';
import UserDetails from '@/components/UserDetails.vue';
import AlbumList from '@/components/AlbumList.vue';
import PostList from '@/components/PostList.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'UsersList',
        component: UsersList,
    },
    {
        path: '/users/:id',
        name: 'UserDetails',
        component: UserDetails,
    },
    {
        path: '/users/AlbumList/:id',
        name: 'AlbumList',
        component: AlbumList,
    },
    {
        path: '/users/PostList/:id',
        name: 'PostList',
        component: PostList,
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
