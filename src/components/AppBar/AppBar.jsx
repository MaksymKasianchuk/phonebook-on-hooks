import AuthNav from "components/AuthNav";
import Navigation from "components/Navigation";
import UserMenu from "components/UserMenu";
import { useAuth } from "hooks";
import { Container } from "components/App/App.styled";
import { AppBarStyled, AppBarContent } from "./AppBar.styled";

const AppBar = () => {
    const { isLoggedIn } = useAuth();

    return(
        <AppBarStyled>
            <Container>
                <AppBarContent>
                    <Navigation />
                    { isLoggedIn ? <UserMenu /> : <AuthNav />}
                </AppBarContent>
            </Container>
        </AppBarStyled>
    );
};
export default AppBar;