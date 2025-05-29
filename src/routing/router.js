import { createRouter, createWebHistory } from 'vue-router';

// OnBoard
import Signin from '../views/onBoard/Signin.vue';
import Signup from '../views/onBoard/Signup.vue';

// Account
import Account from '../views/account/Account.vue';
import EditEmail from '../views/account/Edit-email.vue';
import EditPassword from '../views/account/Edit-password.vue';
import EditName from '../views/account/Edit-name.vue';

// General
import Home from '../views/Home.vue';
import Book from '../views/Book.vue';

const routes = [
    // OnBoard
    {
        path: '/identity/signin',
        name: 'signin',
        component: Signin,
        props: true,
        meta: { title: "CornPass" }
    },
    {
        path: '/identity/signup',
        name: 'signup',
        component: Signup,
        props: true,
        meta: { title: "CornPass" }
    },

    // Account
    {
        path: '/account',
        name: 'account',
        component: Account,
        props: true,
        meta: { title: "CornPass" }
    },
    {
        path: '/account/edit/email',
        name: 'account-edit-email',
        component: EditEmail,
        props: true,
        meta: { title: "CornPass" }
    },
    {
        path: '/account/edit/password',
        name: 'account-edit-password',
        component: EditPassword,
        props: true,
        meta: { title: "CornPass" }
    },
    {
        path: '/account/edit/name',
        name: 'account-edit-name',
        component: EditName,
        props: true,
        meta: { title: "CornPass" }
    },
        
    // General
    {
        path: '/',
        name: 'home',
        component: Home,
        props: true,
        meta: { title: "CornPass" }
    },
    {
        path: '/book/:id',
        name: 'book',
        component: Book,
        props: true,
        meta: { title: "CornPass" }
    },    
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    const pageTitle = to.meta.title;
    if (pageTitle) {
        document.title = pageTitle;
    } else {
        document.title = "CornPass";
    }
    next();
});

export default router;