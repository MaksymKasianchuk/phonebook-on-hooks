import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/operations";

const UserMenu = () => {
    const { user } = useAuth();
    const dispatch = useDispatch();

    const handleLogOut = async () => {
        await dispatch(logOut());
    };

    return (
        <div>
            <p>Welcome, {user.name}</p>
            <button type="button" onClick={handleLogOut}>Logout</button>
        </div>
    );
};
export default UserMenu;