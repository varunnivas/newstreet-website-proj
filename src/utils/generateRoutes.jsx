import { Route } from 'react-router-dom';

const generateRoutes = (routes) => {
    return routes.map((route, index) => {
        const {
            path,
            component: Component,
            exact,
        } = route;
            return (
                <>
                    <Route
                        key={index}
                        exact={exact || ''}
                        path={path}
                        element={<Component />}
                    />
                </>
            );
    });
};

export default generateRoutes;
