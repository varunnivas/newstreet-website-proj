import BasicPage from '../pages/LandingPage/container/BasePage';
import NoPageFound from '../pages/NoPageFound';

const routes = [
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
];

export default routes;
