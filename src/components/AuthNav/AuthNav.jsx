import { NavLink } from "react-router-dom";
import { AuthStyled } from "./AuthNav.styled";

const AuthNav = () => {
    return(
        <AuthStyled>
            <NavLink to="/register">
                Register
            </NavLink>
            <NavLink to="/login">
                Log in
            </NavLink>
        </AuthStyled>
    );
};

export default AuthNav;