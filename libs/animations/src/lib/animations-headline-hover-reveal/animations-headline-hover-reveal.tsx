// https://designcourse.com/app/course/advanced-frontends/module/set-stagger-fromto

import './styles.css';

import { gsap } from 'gsap';

function AnimationsHeaderHoverReveal(): JSX.Element {
  const tagShow = gsap.to('span', {
    opacity: 1,
    stagger: 0.2,
    duration: 0.3,
    paused: true,
  });

  const tagReveal = gsap.to('.reveal', {
    scaleX: 1,
    stagger: 0.1,
    duration: 0.3,
    paused: true,
    transformOrigin: 'left',
    onComplete: () => {
      gsap.to('.reveal', {
        scaleX: 0,
        stagger: 0.1,
        duration: 0.3,
        ease: 'power4.out',
        transformOrigin: 'right',
      });
    },
  });

  const onHover = () => {
    tagShow.play();
    tagReveal.play();
  };

  const onLeave = () => {
    tagShow.reverse();
    tagReveal.reverse();
  };

  return (
    <section onMouseEnter={onHover} onMouseLeave={onLeave}>
      <ul>
        <li>
          <span>Science</span>
          <div className="reveal"></div>
        </li>
        <li>
          <span>Tech</span>
          <div className="reveal"></div>
        </li>
        <li>
          <span>Latest</span>
          <div className="reveal"></div>
        </li>
      </ul>
      <h1>Hover over this title</h1>
    </section>
  );
}

export { AnimationsHeaderHoverReveal };
