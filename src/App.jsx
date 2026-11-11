import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

const MainLP = lazy(() => import('./pages/MainLP'));
const Privacidade = lazy(() => import('./pages/Privacidade'));
const NotFound = lazy(() => import('./pages/NotFound'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div aria-hidden="true" />}>
        <Routes>
          <Route path="/" element={<MainLP />} />
          <Route path="/politica-de-privacidade" element={<Privacidade />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
