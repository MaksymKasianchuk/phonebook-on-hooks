import { Outlet } from "react-router-dom";
import { Suspense } from "react";
import AppBar from "components/AppBar"; 

const SharedLayout = () => {
    return (
        <div>
            <AppBar />
            <Suspense fallback={<p>Loading page...</p>}>
                <Outlet />
            </Suspense>
        </div>
    );
}; 
export default SharedLayout;