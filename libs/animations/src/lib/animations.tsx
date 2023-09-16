// https://www.youtube.com/watch?v=VeTwNnZUPlw&ab_channel=DesignCourse

import { useLayoutEffect, useRef } from 'react';
import styled from '@emotion/styled';

import SplitType, { TargetElement } from 'split-type';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useSmoothScroll } from './_hooks/useSmoothScroll';

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
`;

const Paragraph = styled.p`
  font-size: clamp(2rem, 5vw, 8rem);
`;

function Animations(props: Props): JSX.Element {
  useSmoothScroll();
  const comp = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const splitTypes = document.querySelectorAll('.reveal-type');

      splitTypes.forEach((char) => {
        const text = new SplitType(char as TargetElement, {
          types: 'chars, words, lines',
        });

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
            duration: 0.2,
            stagger: 0.02,
            scrollTrigger: {
              trigger: char,
              start: 'top 80%',
              end: 'top 20%',
              scrub: false,
              markers: false,
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

      <Section className="reveal-type">
        <Paragraph>
          Systematically ushering in a new generation of amazing designers from
          across the world
        </Paragraph>
      </Section>

      <Section></Section>
    </Container>
  );
}

export { Animations };
