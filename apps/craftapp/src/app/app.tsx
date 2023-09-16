import styled from '@emotion/styled';

import { Route, Routes } from 'react-router-dom';

import { Page } from '@hexacraft/page';
import { Animations } from '@hexacraft/animations';

const StyledApp = styled.div``;

export function App() {
  return (
    <StyledApp>
      <Routes>
        <Route path="/" element={<Page />}></Route>
        <Route path="/admin" element={<p>User Created </p>}></Route>
        <Route path="/animations" element={<Animations />}></Route>
      </Routes>
    </StyledApp>
  );
}

export default App;
