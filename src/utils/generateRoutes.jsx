import { Route } from 'react-router-dom';

import PrivateRoute from '../routes/privateRoute';

const generateRoutes = (routes) => {
    return routes.map((route, index) => {
        const {
            path,
            component: Component,
            private: isPrivate,
            roles,
            exact,
        } = route;

        if (isPrivate) {
            return (
                <Route
                    key={index}
                    path={path}
                    exact={exact || ''}
                    element={
                        <PrivateRoute
                            element={<Component />
                            }
                            roles={roles}
                        />
                    }
                />
            );
        } else {
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
        }
    });
};

export default generateRoutes;
