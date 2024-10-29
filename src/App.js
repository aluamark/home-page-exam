import "./App.css";
import About from "./components/about/About";
import Featured from "./components/featured/Featured";
import Footer from "./components/footer/Footer";
import Banner from "./components/hero/Banner";
import AppNavbar from "./components/navbar/AppNavbar";

function App() {
  return (
    <div className="container-fluid m-0 p-0 h-100">
      <AppNavbar />
      <Banner />
      <div className="container">
        <About />
        <Featured />
      </div>
      <Footer />
    </div>
  );
}

export default App;
