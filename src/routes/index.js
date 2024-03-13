import BasicPage from '../pages/LandingPage/container/BasePage';
import NoPageFound from '../pages/NoPageFound';
import News from '../pages/NewsPage/components/News';
import career from '../pages/Career/components/career';

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
    {
        path: '/News',
        component: News,
        exact: true,
    },
    {
        path: '/career',
        component: career,
        exact: true,
    },
];

export default routes;
