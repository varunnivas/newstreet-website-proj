import BasicPage from '../pages/LandingPage/container/BasePage';
import LoginPage from '../pages/LoginPage/container/LoginPage';
import NoPageFound from '../pages/NoPageFound';
import Sidenav from '../pages/AdminPage/components/Sidenav';
import HomePage from '../pages/AdminPage/pages/Home';
import News from '../pages/AdminPage/pages/News/components/News'
import Products from '../pages/AdminPage/pages/Products/components/Products'
import Contact from '../pages/AdminPage/pages/Contact'
import Partners from '../pages/AdminPage/pages/Partners/components/Partners';
import ClientTestimonial from '../pages/AdminPage/pages/ClientTestimonial/components/ClientTestimonial';

const routes = [
    {
        path: '/login', 
        component: LoginPage,
        exact: true,
    },
    {
        path: '/',
        component: BasicPage,
        exact: true,
    },
    {
        path: '*', 
        component: NoPageFound,
        exact: true,
    },
    {
        path: '/admin/sidenav', 
        component:Sidenav,
        exact: true,
    },
    {
        path:'/admin/home',
        component:HomePage,
        exact:true,
        isPrivate: true, 
        roles: ['privateRole'],
    },
    
    {
        path:'/admin/news',
        component:News,
        exact:true,
    },
    {
        path:'/admin/products',
        component:Products,
        exact:true,
    },
    {
        path:'/admin/contact',
        component:Contact,
        exact:true,
    },
    {
        path:'/admin/partner',
        component:Partners,
        exact:true,
    },
    {
        path:'/testimonial',
        component:ClientTestimonial,
        exact:true,
    },

];

export default routes;
