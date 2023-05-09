import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import { Layout } from './Layout'

const Home = lazy(() => import("../pages/Home"));
const Movies = lazy(() => import("../pages/Movies"));
const MoviesDetails = lazy(() => import("../pages/MoviesDetails"));
const Cast = lazy(() => import("./Cast"));
const Reviews = lazy(() => import("./Reviews"));

export const App = () => {

    return (
            <Routes>
              <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='Movies' element={<Movies />} />
                <Route path='Movies/:movieId' element={<MoviesDetails />}> 
                  <Route path='Cast' element={<Cast />} />
                  <Route path='Reviews' element={ <Reviews /> } />
                </Route>
              </Route>
            </Routes>
    )
}
