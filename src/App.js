import Banner from "./Pages/Banner/Banner";
import Content from "./Pages/Content/Content";
import Content2 from "./Pages/Content2/Content2";
import Footer from "./Pages/Footer/Footer";
import Header from "./Pages/Header/Header";
import PlayVideo from "./Pages/PlayVideo/PlayVideo";

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <PlayVideo />
      <Content2 />
      <Banner />
      <Footer />
    </div>
  );
}

export default App;
