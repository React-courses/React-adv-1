import React, { Suspense } from 'react';
import {BrowserRouter, Navigate, NavLink, Route, Routes} from "react-router-dom";
import logo from '../logo.svg';
// import {LazyPage1 , LazyPage2 , LazyPage3 ,} from '../01-lazyload/pages';
import {routes} from "./routes";

const Navigation = () => {
    return (
        <Suspense fallback={<span>Loading...</span>}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav>
                        <img src={logo} alt="logooo"/>
                        <ul>
                            {
                                routes.map(({to, name}) => (
                                    <li key={to}>
                                        <NavLink
                                            to={to}
                                            className={({isActive}) => isActive ? 'nav-active' : ''}
                                        > {name} </NavLink>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>

                    <Routes>
                        {
                            routes.map(({to, path, Component}) => (
                                <Route
                                    key={to}
                                    path={path}
                                    element={< Component/>}/>
                            ))
                        }
                        <Route path="*" element={<Navigate to={routes[0].to} replace={true}/>} />
                    </Routes>
                </div>
            </BrowserRouter>
        </Suspense>
    );
};

export default Navigation;
