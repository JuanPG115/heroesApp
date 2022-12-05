import { NavBar } from "../../ui"
import { Routes, Route, Navigate } from 'react-router-dom';
import { DcPage, HeroPage, MarvelPage, SearchPage } from "../pages";

export const HeroesRoutes = () => {
    return (

        <>
            <NavBar />

            <div className="container">
                <Routes>
                    <Route path="/marvel" element={<MarvelPage />} />
                    <Route path="/Dc" element={<DcPage />} />
                    

                    <Route path="/Search" element={<SearchPage />} />
                    <Route path="/Hero/:id" element={<HeroPage />} />

                    <Route path="/" element={<Navigate to="/marvel" />} />
                </Routes>
            </div>
        </>
    )
}
