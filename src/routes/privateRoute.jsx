import PropTypes from 'prop-types';

const isAuthenticated = (roleCode, roles) => {
    return roleCode && roles?.includes(roleCode);
};

const PrivateRoute = ({ element, roles }) => {
    if (isAuthenticated('privateRole', roles)) {
        return element;
    } else {
        return (<div>
            <h1>404 - Page Not Found</h1>
            <p>The page you are looking for does not exist.</p>
        </div>);
    }
};

export default PrivateRoute;
PrivateRoute.propTypes = {
    element: PropTypes.element.isRequired,
    roles: PropTypes.array.isRequired,
};
