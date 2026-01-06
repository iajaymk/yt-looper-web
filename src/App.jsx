import "./App.css";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-red-950 to-gray-900">
        <NavBar />
        <Hero />
        <Features />
        <Footer />
      </div>
    </>
  );
}

export default App;
