import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Page from './page';

describe('Page', () => {
  it('should render successfully', () => {
    expect(
      render(
        <BrowserRouter>
          <Page />
        </BrowserRouter>
      )
    ).toBeTruthy();
  });
});
