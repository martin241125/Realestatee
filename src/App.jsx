import Hero from "./components/Hero";
import BestDeals from "./components/BestDeals";
import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import NewestDeals from "./components/NewestDeals";

function App() {
  return (
    <>
      <div className="w-11/12 md:w-4/5 m-auto">
        <Hero />
        <BestDeals />
        <AboutUs />

        <NewestDeals />
      </div>
      <Footer />
    </>
  );
}

export default App;
