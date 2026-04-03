import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Highlights from "./pages/Highlights";
import News from "./pages/News";
import Podcasts from "./pages/Podcasts";
import About from "./pages/About";
import Login from "./pages/Login";
import Webinars from "./pages/Webinars";
import Blogs from "./pages/Blogs";
import Rankings from "./pages/Rankings";


function App() {
  return (
    <Routes>
      {/* Layout Wrapper */}
      <Route path="/" element={<Layout />}>

        <Route index  element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/highlights" element={<Highlights />} />
        <Route path="/news" element={<News />} />
        <Route path="/podcasts" element={<Podcasts />} />
        <Route path="/about" element={<About />} />
        <Route path="/rankings" element={<Rankings />} />
        <Route path="/webinars" element={<Webinars />} />
        <Route path="/login" element={<Login/>}> </Route>
      </Route>
    </Routes>
  );
}

export default App;
