import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import AppBar from "components/AppBar"; 
import { Container } from "components/App/App.styled";

const SharedLayout = () => {
    return (
        <div>
            <AppBar />
            <Suspense fallback={<Container><p>Loading page...</p></Container>}>
                <Outlet />
            </Suspense>
        </div>
    );
}; 
export default SharedLayout;