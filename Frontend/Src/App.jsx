import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar.jsx";
import Footer from "./Components/Footer.jsx";
import Home from "./Pages/Home.jsx";
import Services from "./Pages/Services.jsx";
import Blog from "./Pages/Blog.jsx";
import BlogPost from "./Pages/BlogPost.jsx";
import Contact from "./Pages/Contact.jsx";

export default function App() {
  return (
    <div className="flex flex-col min-h-screen font-body">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Blog/:slug" element={<BlogPost />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
