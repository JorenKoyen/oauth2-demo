import { FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// -- pages
import { IndexPage } from '../pages/index.page';
import { CallbackPage } from '../pages/callback.page';
import { ProtectedPage } from '../pages/protected.page';

export const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/cb" element={<CallbackPage />} />
        <Route path="/protected" element={<ProtectedPage />} />
      </Routes>
    </BrowserRouter>
  );
};
