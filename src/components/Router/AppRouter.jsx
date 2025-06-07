import { BrowserRouter, Route, Routes } from "react-router";

import HomePage from "../../pages/HomePage";
import ProjectsPage from "../../pages/ProjectsPage";
import React from "react";

const AppRouter = () => {
    return (
    
        <BrowserRouter>
            <Routes>
                <Route path="/home" element={<HomePage/>}/>
                <Route path="/projects" element={<ProjectsPage/>}/>
            </Routes>
        </BrowserRouter>
        
    )
}

export default AppRouter