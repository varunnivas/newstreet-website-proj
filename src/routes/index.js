import BasicPage from '../pages/LandingPage/container/BasePage';
import NoPageFound from '../pages/NoPageFound';
import Products from '../pages/Products/Products'; 

const routes = [
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
];

export default routes;
