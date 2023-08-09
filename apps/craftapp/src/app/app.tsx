import styled from '@emotion/styled';

import { Route, Routes } from 'react-router-dom';

import { Page } from '@hexacraft/page';
const StyledApp = styled.div``;

export function App() {
  return (
    <StyledApp>
      <Routes>
        <Route path="/" element={<Page />}></Route>
        <Route path="/admin" element={<p>User Created </p>}></Route>
      </Routes>
    </StyledApp>
  );
}

export default App;
