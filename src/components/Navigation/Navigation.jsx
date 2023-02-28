import { NavLink } from "react-router-dom";
import { useAuth } from "hooks";
import { NavigationStyled }from './Navigation.styled'
const Navigation = () => {
    const { isLoggedIn } = useAuth();
    return(
        <NavigationStyled>
            <NavLink to="/">
                Home
            </NavLink>
            {isLoggedIn && (
                <NavLink to="/contacts">
                    Contacts
                </NavLink>
            )}
        </NavigationStyled>
    );
};
export default Navigation;