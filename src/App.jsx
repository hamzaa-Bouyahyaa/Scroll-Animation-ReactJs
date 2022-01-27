import React, { useEffect } from "react";
import "./App.css";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="container">
      <h1 className="title">Animation App, Try to Scroll !</h1>
      <div className="box">1</div>
      <div className="box">2</div>
      <div
        className="box"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        3
      </div>
      <div className="box" data-aos="fade-right">
        4
      </div>
      <div className="box" data-aos="fade-left">
        5
      </div>
      <div className="box" data-aos="flip-up">
        6
      </div>
      <div className="box" data-aos="zoom-in">
        7
      </div>
      <div className="box" data-aos="zoom-out">
        8
      </div>
    </div>
  );
}

export default App;
