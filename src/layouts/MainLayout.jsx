// import React from 'react';
// import useEffect from "react";
import { Outlet, } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const MainLayout = () => {
//     const location = useLocation();

//     useEffect(()=>{
//         const routeTitles = {
//       "/": "MediQueue | Home",
//       "/tutors": "MediQueue | All Tutors",
//       "/addTutor": "MediQueue | Add Tutor",
//       "/myTutors": "MediQueue | My Tutors",
//       "/myBookedSessions": "MediQueue | My Booked Sessions",
//       "/login": "MediQueue | Login",
//       "/register": "MediQueue | Register",
//     };

//     const currentTitle = routeTitles[location.pathname] || "MediQueue";
//     document.title = currentTitle;
//   }, [location.pathname]);

    
    return (
        <div>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;