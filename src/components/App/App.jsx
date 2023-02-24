import { useEffect, lazy } from "react";
import { useDispatch } from "react-redux";
import { Routes } from 'react-router-dom';


const HomePage = lazy(() => import('pages/Home'));
const RegisterPage = lazy(() => import('pages/Register'));
const LooginPage = lazy(() => import('pages/Login'));
const ContactsPage = lazy(() => import('pages/Contacts'));

const App = () => {
    
  return (
   <></>
  );
  
}


export default App;