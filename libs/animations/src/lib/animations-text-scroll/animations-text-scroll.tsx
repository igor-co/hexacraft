// https://www.youtube.com/watch?v=VeTwNnZUPlw&ab_channel=DesignCourse

import { useLayoutEffect, useRef } from 'react';
import styled from '@emotion/styled';

import SplitType, { TargetElement } from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSmoothScroll } from '../_hooks/useSmoothScroll';

gsap.registerPlugin(ScrollTrigger);

/* eslint-disable-next-line */
export type Props = {};

const Container = styled.div`
  margin: 0;
  font-family: Inter, Arial, Helvetica, sans-serif;
`;

const Section = styled.section`
  height: 100vh;
  padding: 0 clamp(4rem, 15vw, 20rem);
  display: grid;
  place-content: center;
  &:nth-of-type(odd) {
    border-bottom: 1px solid #000;
  }
  &:nth-of-type(3) {
    background: #ffff00;
  }
  &:nth-of-type(4) {
    background: rgb(29, 29, 29);
    color: white;
  }
`;

const Paragraph = styled.p`
  font-size: clamp(2rem, 5vw, 8rem);
`;

function AnimationsTextScroll(props: Props): JSX.Element {
  useSmoothScroll();
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const splitTypes = document.querySelectorAll('.reveal-type');

      splitTypes.forEach((char) => {
        const text = new SplitType(char as TargetElement, {
          types: 'chars, words, lines',
        });

        // 1. reveal effect
        // gsap.from(text.chars, {
        //   scrollTrigger: {
        //     trigger: char,
        //     start: 'top 80%',
        //     end: 'top 20%',
        //     scrub: true,
        //     markers: true,
        //   },
        //   opacity: 0.2,
        //   stagger: 0.1,
        // });

        // 2. up effect
        // gsap.from(text.chars, {
        //   scrollTrigger: {
        //     trigger: char,
        //     start: 'top 60%',
        //     end: 'top 20%',
        //     scrub: true,
        //     markers: true,
        //   },
        //   y: 100,
        //   opacity: 0,
        //   stagger: 0.1,
        // });

        // 3. scale effect
        // gsap.from(text.chars, {
        //   scrollTrigger: {
        //     trigger: char,
        //     start: 'top 60%',
        //     end: 'top 20%',
        //     scrub: true,
        //     markers: true,
        //   },
        //   scaleY: 0, // try without  scale
        //   y: -1,
        //   transformOrigin: 'top', // try bottom center
        //   opacity: 0, // try without opacity
        //   stagger: 0.1,
        // });

        // 4. color effect
        // const bg = char.getAttribute('data-bg-color');
        // const fg = char.getAttribute('data-fg-color');

        // gsap.fromTo(
        //   text.chars,
        //   {
        //     color: bg!,
        //   },
        //   {
        //     color: fg!,
        //     duration: 0.3,
        //     stagger: 0.02,
        //     scrollTrigger: {
        //       trigger: char,
        //       start: 'top 80%',
        //       end: 'top 20%',
        //       scrub: false,
        //       markers: true,
        //       toggleActions: 'play play reverse reverse',
        //     },
        //   }
        // );

        // 5. Autoplay on scroll
        gsap.fromTo(
          text.chars,
          {
            scaleY: 0,
            y: -20,
            transformOrigin: 'top',
          },
          {
            scaleY: 1,
            y: 0,
            duration: 0.3,
            stagger: 0.02,
            scrollTrigger: {
              trigger: char,
              start: 'top 80%',
              end: 'top 20%',
              scrub: false,
              markers: true,
              toggleActions: 'play play reverse reverse',
            },
          }
        );
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <Container ref={comp}>
      <Section>
        <h1>Scroll down for awsomeness.</h1>
      </Section>

      <Section
        className="reveal-type"
        data-bg-color="#ccc"
        data-fg-color="teal"
      >
        <Paragraph>
          Systematically ushering in a new generation of amazing designers from
          across the world
        </Paragraph>
      </Section>
      <Section
        className="reveal-type"
        data-bg-color="#b6b600"
        data-fg-color="black"
      >
        <Paragraph>
          Modern UI designers will expand their skillset to include frontend.
        </Paragraph>
      </Section>
      <Section
        className="reveal-type"
        data-bg-color="#353535"
        data-fg-color="red"
      >
        <Paragraph>
          The web is not static anymore, interactivity and motion now dominate
        </Paragraph>
      </Section>

      <Section></Section>
    </Container>
  );
}

export { AnimationsTextScroll };
