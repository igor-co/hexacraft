// https://designcourse.com/app/course/advanced-frontends/module/set-stagger-fromto

import { useEffect, useRef } from 'react';
import styled from '@emotion/styled';

import { gsap } from 'gsap';

const Wrapper = styled.section`
  height: 100vh;
  display: grid;
  place-content: center;
  background-color: #202123;
`;

const Section = styled.section`
  display: flex;
  gap: 4em;
  justify-content: space-between;
`;

const Mask = styled.div`
  overflow: hidden;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 80vh;
`;

const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 3rem;
  text-align: center;
  color: white;
  margin: 0;
`;

function AnimationsSetStaggerFromTo(): JSX.Element {
  const comp = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      function scaleDown() {
        gsap.to('img', {
          scale: 1,
          duration: 1,
          ease: 'power4.out',
        });
      }

      gsap.set('img', {
        yPercent: -100,
      });

      gsap.set('p', { opacity: 0 });

      gsap.to('img', {
        yPercent: 0,
        scale: 1.3,
        duration: 1.5,
        stagger: 0.15,
        ease: 'power4.out',
        onComplete: scaleDown, // my function
      });

      gsap.to('p', {
        opacity: 1,
        y: 50,
        duration: 2,
        stagger: 0.3,
      });
    }, comp);

    return () => ctx.revert();
  }, []);

  return (
    <Wrapper>
      <Section ref={comp}>
        <Mask>
          <Image
            src="https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60"
            alt="Abstract image"
          />
          <Text style={{ color: 'black' }}>living</Text>
        </Mask>

        <Mask>
          <Image
            src="https://images.unsplash.com/photo-1500462918059-b1a0cb512f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60"
            alt="Abstract image"
          />
          <Text style={{ color: 'black' }}>in</Text>
        </Mask>

        <Mask>
          <Image
            src="https://images.unsplash.com/photo-1464639351491-a172c2aa2911?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=60"
            alt="Abstract image"
          />
          <Text>abstraction</Text>
        </Mask>
      </Section>
    </Wrapper>
  );
}

export { AnimationsSetStaggerFromTo };
