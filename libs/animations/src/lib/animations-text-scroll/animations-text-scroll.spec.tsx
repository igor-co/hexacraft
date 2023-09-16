import { render } from '@testing-library/react';

import { AnimationsTextScroll } from '../animations-text-scroll';

describe('AnimationsTextScroll', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<AnimationsTextScroll />);
    expect(baseElement).toBeTruthy();
  });
});
