import './App.css';
import travel_01 from "./assests/01.jpg";
import travel_02 from "./assests/travel-02.jpg";
import travel_03 from "./assests/travel-03.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {

  const navbarLinks = [
    { url: "#", title: "Home" },
    { url: "#", title: "Trips" },
    { url: "#", title: "Rewards" },
  ];

  return<div className="App">
     <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={travel_01}/>
      <Slider
        imageSrc={travel_02}
        title={"Be an explorer."}
        subtitle={
          "Our platform offers a wide variety of unique travel locations!"
        }
      />
      <Slider
        imageSrc={travel_03}
        title={"Memories for a lifetime."}
        subtitle={"Your dream vacation is only a few clicks away."}
        flipped={true}
      />
    </div>;
}

export default App;
