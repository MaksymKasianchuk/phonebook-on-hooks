import { Navigate } from "react-router-dom";
import { useAuth } from "hooks";

export const RestrictedRoute = ({redirectTo = '/', component: Component}) => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? <Navigate to={redirectTo} /> : <Component />;
};