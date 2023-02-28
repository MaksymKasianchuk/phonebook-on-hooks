import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";
import { contactsApi } from 'redux/contacts/contactsApi';
import { UserMenuStyled } from "./UserMenu.styled";

const UserMenu = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();

    const handleLogOut = async () => {
        await dispatch(contactsApi.util.resetApiState()); //clear contacts for another user
        await dispatch(logOut());
    };

    return (
        <UserMenuStyled>
            <p>Welcome, <span>{user.name}</span></p>
            <button type="button" onClick={handleLogOut}>Logout</button>
        </UserMenuStyled>
    );
};
export default UserMenu;