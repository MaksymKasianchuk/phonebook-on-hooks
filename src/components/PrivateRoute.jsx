import { Navigate } from "react-router-dom";
import { useAuth } from "hooks";

export const PrivateRoute = ({redirectTo = '/', component: Component}) => {
    const { isLoggedIn, isRefreshing } = useAuth();
    const shouldRedirect = !isLoggedIn && !isRefreshing;
    return shouldRedirect ? <Navigate to={redirectTo} /> : <Component />;
};