import BasicPage from '../pages/LandingPage/container/BasePage';
import LoginPage from '../pages/LoginPage/container/LoginPage';
import NoPageFound from '../pages/NoPageFound';
import Sidenav from '../pages/AdminPage/components/Sidenav';
import HomePage from '../pages/AdminPage/pages/Home';
import News from '../pages/AdminPage/pages/News'
import Products from '../pages/AdminPage/pages/Products'
import Contact from '../pages/AdminPage/pages/Contact'
import Careers from'../pages/AdminPage/pages/Careers'

const routes = [
    {
        path: '/LoginPage', 
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
        path: '/Sidenav', 
        component:Sidenav,
        exact: true,
    },
    {
        path:'/Home',
        component:HomePage,
        exact:true,
    },
    {
        path:'/News',
        component:News,
        exact:true,
    },
    {
        path:'/Products',
        component:Products,
        exact:true,
    },
    {
        path:'/Contact',
        component:Contact,
        exact:true,
    },
    {
        path:'/Careers',
        component:Careers,
        exact:true,
    }
];

export default routes;
