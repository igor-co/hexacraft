import styled from '@emotion/styled';

import { Route, Routes } from 'react-router-dom';

import { Page } from '@hexacraft/page';
import {
  Animations,
  AnimationsProgress,
  AnimationsScroll,
  AnimationsSetStaggerFromTo,
  AnimationsTextScroll,
} from '@hexacraft/animations';

const StyledApp = styled.div``;

export function App() {
  return (
    <StyledApp>
      <Routes>
        <Route path="/" element={<Page />}></Route>
        <Route path="/admin" element={<p>User Created </p>}></Route>
        <Route
          path="/animations-progress"
          element={<AnimationsProgress />}
        ></Route>
        <Route path="/animations-scroll" element={<AnimationsScroll />}></Route>
        <Route
          path="/animations-set-stagger-fromto'
"
          element={<AnimationsSetStaggerFromTo />}
        ></Route>
        <Route
          path="/animations-text-scroll"
          element={<AnimationsTextScroll />}
        ></Route>
        <Route path="/animations" element={<Animations />}></Route>
      </Routes>
    </StyledApp>
  );
}

export default App;
