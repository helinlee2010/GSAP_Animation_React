import React, { useRef, useEffect, useState } from "react";
import styles from "./NavButtons.module.scss";
import { TweenMax, Power3 } from "gsap";

export default function NavButtons() {
  let circleTop = useRef(null);
  let circleMiddle = useRef(null);
  let circleBottom = useRef(null);

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    TweenMax.staggerFrom(
      [circleTop, circleMiddle, circleBottom],
      1,
      { x: 40, ease: Power3.easeOut },
      0.2
    );
  }, []);

  const expandCircle = circle => {
    TweenMax.to(
      circle,
      0.2,
      {
        width: "5.5rem",
        height: "5.5rem",
        ease: Power3.easeOut
      },
      { css: { marginRight: "1rem" } }
    );
    setExpanded(true);
  };
  const shrinkCircle = circle => {
    TweenMax.to(circle, 0.2, {
      width: "3rem",
      height: "3rem",
      ease: Power3.easeOut
    });
    setExpanded(false);
  };

  return (
    <div className="circle-container">
      <div className={styles.circleWrapper}>
        <div
          className={styles.circleTop}
          ref={elem => (circleTop = elem)}
          onClick={() => {
            expanded ? shrinkCircle(circleTop) : expandCircle(circleTop);
          }}
        />
        <div className={styles.text}>
          <p>About</p>
        </div>
      </div>

      <div className={styles.circleWrapper}>
        <div
          className={styles.circleMiddle}
          ref={elem => (circleMiddle = elem)}
          onClick={() => {
            expanded ? shrinkCircle(circleMiddle) : expandCircle(circleMiddle);
          }}
        />
        <div className={styles.text}>
          <p>Products</p>
        </div>
      </div>

      <div className={styles.circleWrapper}>
        <div
          className={styles.circleBottom}
          ref={elem => (circleBottom = elem)}
          onClick={() => {
            expanded ? shrinkCircle(circleBottom) : expandCircle(circleBottom);
          }}
        />
        <div className={styles.text}>
          <p>Contact</p>
        </div>
      </div>
    </div>
  );
}
