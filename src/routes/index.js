import careerContainer from '../pages/Career/container/careerContainer';
import BasicPage from '../pages/LandingPage/container/BasePage';
import newsContainer from '../pages/News/container/newsContainer';
import LoginPage from '../pages/LoginPage/container/LoginPage';
import NoPageFound from '../pages/NoPageFound';
import Sidenav from '../pages/AdminPage/components/Sidenav';
import HomePage from '../pages/AdminPage/pages/Home';
import AdminProducts from '../pages/AdminPage/pages/Products/components/Products'
import AdminContact from '../pages/AdminPage/pages/Contact'
import AdminClientTestimonial from '../pages/AdminPage/pages/ClientTestimonial/components/ClientTestimonial';
import Adminnews from '../pages/AdminPage/pages/News/components/News';
import AdminPartners from '../pages/AdminPage/pages/Partners/components/Partners';
import Products from '../pages/Products/Products'; 

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
        path:'/products',
        component:Products
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
        path:'/admin/adminnews',
        component:Adminnews,
        exact:true,
    },
    {
        path:'/admin/adminproducts',
        component:AdminProducts,
        exact:true,
    },
    {
        path:'/admin/admincontact',
        component:AdminContact,
        exact:true,
    },
    {
        path:'/admin/adminpartner',
        component:AdminPartners,
        exact:true,
    },
    {
        path:'/admintestimonial',
        component:AdminClientTestimonial,
        exact:true,
    },
    {
        path: '/news',
        component: newsContainer,
        exact: true,
    },
    {
        path: '/career',
        component: careerContainer,
        exact: true,
    },

];

export default routes;
