import { render } from '@testing-library/react';

import { Animations } from './animations';

describe('Animations', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Animations />);
    expect(baseElement).toBeTruthy();
  });
});
