import React from 'react';
import './App.css';
import {NavLink, Route, Routes, Outlet, useParams, useNavigate} from "react-router-dom";


// const Profile = () => {
//     const params = useParams<"id">()
//     const some = params.id
//     console.log(some)
//
//     return (
//         <div>Profile info</div>
//     )
// }
//
//
// function App() {
//     return (
//         <div className="App">
//             <NavLink to={"/"}>Main</NavLink>---
//             <NavLink to={"/login"}>Login</NavLink>---
//             <NavLink to={"/profile/1"}>Profile</NavLink>---
//
//
//             <Routes>
//                 <Route path={"/*"} element={<div>404</div>}/>
//                 <Route path={"/"} element={<div>main</div>}/>
//                 <Route path={"/login"} element={<div>login</div>}/>
//                 <Route path={"/profile/:id"} element={<Profile/>}/>
//             </Routes>
//         </div>
//     )
// }
const Profile = ()=> {
    const navigate = useNavigate()

    return(
        <div>
            profile
            <button onClick={()=>{navigate(-1)}}>LogOut</button>
        </div>
    )
}

const App = () => {
    return (
        <div className="App">
            <NavLink to={"/"}>Main</NavLink>---
            <NavLink to={"/login"}>Login</NavLink>---
            <NavLink to={"/profile/1"}
                     style={(params) => {
                         return {color: params.isActive ? 'lime' : 'blue'}
                     }}
            >Profile
            </NavLink>---
            <NavLink to={"/profile/settings"}
                     className={(isActive) => isActive ? 'act' : 'def'}

            >Settings</NavLink>---

            <a
            href={"https://google.com"}
            target={'_blank'} // открывает в новом окне
                rel={'noreferrer nofollow noopener'} // для безопасности
            >Google</a>


            <Routes>
                <Route path={"/*"} element={<div>404</div>}/>
                <Route path={"/"} element={<div>main</div>}/>
                <Route path={"/login"} element={<div>login</div>}/>
                <Route path={"/profile/:id"} element={<Profile/>}/>
                <Route path={"/profile/settings"} element={<div>settings</div>}/>
            </Routes>

        </div>
    )
}

export default App;