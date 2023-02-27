import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { refreshUser } from "redux/auth/operations";
import { Route, Routes } from 'react-router-dom';
import SharedLayout from "components/SharedLayout";
import { RestrictedRoute } from "components/RestrictedRoute";
import { PrivateRoute } from "components/PrivateRoute";
import { useAuth } from "hooks";

const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LooginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

const App = () => {
  const { isRefreshing } = useAuth();
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ?  (<b>Refreshing user...</b>) : (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={
          <RestrictedRoute redirectTo="/contacts" component={RegisterPage}/>
        }/>
        <Route path="/login" element={
          <RestrictedRoute redirectTo="/contacts" component={LooginPage}/>
        }/>
        <Route path="/contacts" element={
          <PrivateRoute redirectTo="/login" component={ContactsPage} />
        }/>
      </Route>
    </Routes>
  );
  
}


export default App;