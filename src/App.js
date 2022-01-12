import { Route, Routes } from "react-router-dom";
import AllMeetUpsPage from "./pages/AllMeetUps";
import FavoritesPage from "./pages/Favorites";
import NewMeetupPage from "./pages/NewMeetup";
import MainNavigation from "./components/Layout/MainNavigation";
import Layout from "./components/Layout/Layout";
function App() {
  //localhost:3000/favorites
  return (
    <Layout>
      <Routes>
        <Route exact path="/" element={<AllMeetUpsPage />}></Route>
        <Route exact path="/new-meetup" element={<NewMeetupPage />}></Route>
        <Route exact path="/favorites" element={<FavoritesPage />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
