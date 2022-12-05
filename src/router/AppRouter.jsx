import { Routes, Route } from 'react-router-dom';
import { LoginPage } from '../auth';
import { HeroesRoutes } from '../heroes';
import { PrivateRouter } from './PrivateRouter';
import { PublicRouter } from './PublicRouter';

export const AppRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/Login" element={
                    <PublicRouter>
                        <LoginPage />
                    </PublicRouter>}
                />

                <Route path="/*" element={
                    <PrivateRouter>
                        <HeroesRoutes />
                    </PrivateRouter>} />
                {/*<Route path="/*" element={<HeroesRoutes />} />*/}
            </Routes>
        </>
    )
}
