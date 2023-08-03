import styled from '@emotion/styled';

import { Route, Routes } from 'react-router-dom';

const StyledApp = styled.div``;

export function App() {
  return (
    <StyledApp>
      <Routes>
        <Route path="/admin" element={<p>User Created </p>}></Route>
      </Routes>
    </StyledApp>
  );
}

export default App;
