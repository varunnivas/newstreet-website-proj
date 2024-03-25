import careerContainer from '../pages/Career/container/careerContainer';
import BasicPage from '../pages/LandingPage/container/BasePage';
import newsContainer from '../pages/News/container/newsContainer';
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
