// https://designcourse.com/app/course/advanced-frontends/module/from-and-to-method

import { useLayoutEffect, useRef } from 'react';
import styled from '@emotion/styled';

import { gsap } from 'gsap';

const Container = styled.div`
  height: 100vh;
  background-color: #2865ff;
`;

const Title = styled.h1`
  margin: 0;
  padding: 25vh 0 0 0;
  font-family: 'Bebas Neue';
  font-size: 30rem;
  color: #ffffff;
  opacity: 0.1;
  text-align: center;
`;

const Progress = styled.div`
  background-color: #a1bcff;
  height: 3px;
  width: 0px;
  position: absolute;
  top: 50%;
`;

function AnimationsProgress(): JSX.Element {
  const comp = useRef(null);
  const progressRef = useRef(null);
  const titleRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.to(progressRef.current, {
        width: '100vw',
        duration: 2,
        ease: 'power4.out',
      }).to(progressRef.current, {
        height: '100%',
        duration: 1,
        ease: 'bounce.out',
        top: '0%',
        backgroundColor: '#ffffff',
      });

      gsap.from(titleRef.current, {
        yPercent: -200,
        ease: 'elastic.out(1, 0.3)',
        duration: 1.5,
      });
    }, comp); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup after unmount
  }, []);

  return (
    <Container ref={comp}>
      <Title ref={titleRef}>STORY</Title>

      <Progress ref={progressRef}></Progress>
    </Container>
  );
}

export { AnimationsProgress };
