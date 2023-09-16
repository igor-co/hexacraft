// https://www.youtube.com/watch?v=PrQeeUt49f4&t=1s&ab_channel=DesignCourse
// https://greensock.com/docs/v3/Plugins/ScrollTrigger
import { useEffect, useLayoutEffect, useRef } from 'react';
import styled from '@emotion/styled';
import Lenis from '@studio-freight/lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Do not forget to register plugin in order to use it
gsap.registerPlugin(ScrollTrigger);

/* eslint-disable-next-line */
export type Props = {};

const Spacer = styled.div`
  height: 100vh;
`;

const Container = styled.div`
  margin: 0;
  padding: 0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 1.5rem;
`;

const Card = styled.div`
  background-color: #202123;
  width: 30vw;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  color: white;
  left: -60rem;
`;

const Title = styled.h1`
  border: 1px solid pink;
  font-size: 2rem;
  text-align: center;
`;

const useSmoothScroll = () => {
  // smooth scrolls
  useEffect(() => {
    const lenis = new Lenis();

    // lenis.on('scroll', (e) => {
    //   console.log(e);
    // });

    const raf = (time: number): void => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);
    return () => {
      lenis.destroy();
    };
  }, []);
};

function AnimationsScroll(props: Props): JSX.Element {
  useSmoothScroll();

  const firstCard = useRef(null);
  const secondCard = useRef(null);
  const comp = useRef(null);

  // useLayoutEffect(() => {
  //   // create our context. This function is invoked immediately and all GSAP animations and ScrollTriggers created during the execution of this function get recorded so we can revert() them later (cleanup)
  //   const ctx = gsap.context(() => {
  //     // create a ScrollTrigger for each Card
  //     gsap.to(firstCard.current, {
  //       rotation: 360,
  //       x: -20,
  //       duration: 1,
  //       stagger: 0.1,
  //     });
  //   }, comp); // <- IMPORTANT! Scopes selector text

  //   return () => ctx.revert(); // cleanup
  // }, []);

  const customScrollTrigger = (trigger: gsap.DOMTarget | undefined) => {
    return {
      trigger: trigger,
      start: 'center center',
      end: 'bottom center',
      id: 'secondCard',
      scrub: true,
      markers: true,
      toggleActions: 'play pause play reverse',
    };
  };

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl_1 = gsap.timeline({
        scrollTrigger: {
          trigger: firstCard.current,
          start: 'top center',
          end: 'bottom center',
          id: 'firstCard',
          scrub: true,
          markers: false,
          toggleActions: 'play pause play reverse',
        },
      });

      tl_1.to(firstCard.current, {
        x: '60rem',
        duration: 0.3,
      });

      const tl_2 = gsap.timeline({
        scrollTrigger: customScrollTrigger(secondCard.current),
      });

      // const tl_2 = gsap.timeline({
      //   scrollTrigger: {
      //     trigger: firstCard.current,
      //     start: 'top center',
      //     end: 'bottom center',
      //     id: 'firstCard',
      //     scrub: true,
      //     markers: false,
      //     toggleActions: 'play pause play reverse',
      //   },
      // });

      tl_2.to(secondCard.current, {
        x: '20rem',
        y: '20rem',
        duration: 0.3,
      });
    }, comp); // <- IMPORTANT! Scopes selector text

    return () => ctx.revert(); // cleanup after unmount
  }, []);

  return (
    <Container ref={comp}>
      <Title>Some cool text</Title>
      <Spacer />

      <Card ref={firstCard}>
        <Title>
          hello from <strong>Animations</strong>!
        </Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rem
          libero incidunt impedit ipsa veniam totam ipsam mollitia sit
          voluptatem atque ipsum vitae, deserunt architecto officia aliquam
          facilis consequatur fugiat? Aperiam fugiat in pariatur mollitia
          incidunt laboriosam blanditiis error a consequatur dolor reiciendis
          ullam maxime, eaque tenetur nulla perspiciatis enim. Dolore quos iusto
          totam recusandae vel exercitationem doloribus ipsa in? Quidem sapiente
          aspernatur esse dolor quaerat itaque quasi eos aliquam laudantium qui
          veniam cupiditate voluptas nisi, molestiae rerum.
        </p>
      </Card>
      <Spacer />
      <Card ref={secondCard}>
        <Title>Second Card</Title>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor rem
          libero incidunt impedit ipsa veniam totam ipsam mollitia sit
          voluptatem atque ipsum vitae, deserunt architecto officia aliquam
          facilis consequatur fugiat? Aperiam fugiat in pariatur mollitia
          incidunt laboriosam blanditiis error a consequatur dolor reiciendis
          ullam maxime, eaque tenetur nulla perspiciatis enim. Dolore quos iusto
          totam recusandae vel exercitationem doloribus ipsa in? Quidem sapiente
          aspernatur esse dolor quaerat itaque quasi eos aliquam laudantium qui
          veniam cupiditate voluptas nisi, molestiae rerum.
        </p>
      </Card>
      <Spacer />
    </Container>
  );
}

export { AnimationsScroll };
