import { render } from '@testing-library/react';

import { AnimationsScroll } from '../animations-scroll';

describe('Animations', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AnimationsScroll />);
    expect(baseElement).toBeTruthy();
  });
});
