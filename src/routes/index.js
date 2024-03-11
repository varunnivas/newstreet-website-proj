import BasicPage from '../pages/LandingPage/container/BasePage';
import LoginPage from '../pages/LoginPage/container/LoginPage';
import NoPageFound from '../pages/NoPageFound';

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
    }
];

export default routes;
