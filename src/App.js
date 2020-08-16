import React, { useRef, useEffect } from "react";
import "./styles.scss";
import NavButtons from "./components/NavButtons";

import { TweenMax, Power3 } from "gsap";

export default function App() {
  let textContainer = useRef(null);
  let app = useRef(null);

  useEffect(() => {
    TweenMax.to(app, 0, { css: { visibility: "visible" } });
    // Animation
    TweenMax.to(textContainer, 0.9, {
      opacity: 1,
      y: -20,
      ease: Power3.easeOut,
      delay: 0.5
    });
  }, []);

  return (
    <div className="App" ref={elem => (app = elem)}>
      <div
        className="text-container"
        ref={elem => {
          textContainer = elem;
        }}
      >
        <h1>''Expect great things, and great things will come.''</h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
          dictum a ligula hendrerit ornare. Curabitur id porta mauris, sit amet
          pellentesque sapien. Cras sit amet vehicula purus. Mauris eget quam
          velit. Donec id mi malesuada, cursus magna egestas, fringilla turpis.
          Donec vitae libero tristique, faucibus purus quis, feugiat urna. Nam
          in lacus a nibh vestibulum viverra eu quis nisl. In sed aliquet augue.
          Morbi sed rutrum urna, nec pharetra justo.
        </p>
      </div>
      <NavButtons />
    </div>
  );
}
