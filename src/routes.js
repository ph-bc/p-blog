import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutMe from "./paths/AboutMe";
import Home from "./paths/Home";
import Menu from "./components/Menu";
import Footer from "components/Footer";
import Default from "components/Default";
import Post from "paths/Post";
import NotFound from "paths/NotFound";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<Default />}>
          <Route index element={<Home />} />
          <Route path="about-me" element={<AboutMe />} />
        </Route>
        <Route path="posts/:title/*" element={<Post />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default AppRoutes;
