import React from "react";
import "./App.css";
import Navbar from "./components/Header";

import detection1 from "./images/detection1.svg";
import detection2 from "./images/detection2.svg";
import detection3 from "./images/detection3.svg";

import useWebAnimations, { pulse } from "@wellyshen/use-web-animations";

import bitcoin from './images/bitcoin.svg'


function App() {

  
  
  const pattern = useWebAnimations({
    playbackRate: 0.08,
    keyframes: [{ transform: "translateY(-100%)" }],
    timing: {
      easing: "steps(3, end)",
      delay: 100,
      duration: 200,

      iterations: Infinity,
    },
  });
  
  const globe1 = useWebAnimations({
    playbackRate: 0.08,
    keyframes: [{ transform: "rotateY(360deg)" }],
    timing: {
      easing: "steps(100, end)",
      delay: 100,
      duration: 100,
      iterations: Infinity,
    },
  });


  return (
    <div className="App">
      <Navbar></Navbar>
      <div id="container">

      <div className="hero">

        <div className="container2">
            <span className="mainHeading">
              <b>WELCOME TO THE </b>{" "}
            </span>
            <span className="mainHeading">
              <b>WORLD OF DIGITAL CURRENCY </b>
            </span>
          </div>

          <div className="container1">
            <div ref={globe1.ref}>

              <img
                    className="businessImg"
                    src={bitcoin}
                    alt="businessAnimation3"
                  />
                  </div>
        
          </div>

        </div>

        <div className="back">
            <h1 className="title">Future is Blockchain</h1>

          </div>

          
          <div className="hero1">

              <div className="container2">
                  <span className="mainHeading">
                    <b>Cryptocurrency </b>{" "}
                  </span>
                  <br/>
                  <span className="subHeading">Cryptocurrency is absolutely here to stay. If you can't see that at this point, it's time to learn more about itI</span>
              </div>

              <div className="container1">
                  <div className="detectionContainer">
                    <div ref={pattern.ref}>
                      <img
                        className="detectionImg"
                        src={detection1}
                        alt="detectionAnimation1"
                      />
                      <img
                        className="detectionImg"
                        src={detection2}
                        alt="detectionAnimation2"
                      />
                      <img
                        className="detectionImg"
                        src={detection3}
                        alt="detectionAnimation3"
                      />
                    </div>
                  </div>
                  </div>

         </div>
         </div>
    </div>
  );
}

export default App;
