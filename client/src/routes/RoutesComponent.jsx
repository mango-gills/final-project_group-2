import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Landing from '../pages/Landing.jsx';
import Registration from '../pages/Registration.jsx';
import LogIn from '../pages/LogIn.jsx';
import PasswordRecovery from '../pages/PasswordRecovery.jsx';
import PasswordVerification from '../pages/PasswordVerification.jsx';
import PasswordReset from '../pages/PasswordReset.jsx';
import NotFound from '../pages/NotFound.jsx';

const RoutesComponent = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/password-recovery" element={<PasswordRecovery />} />
        <Route
          path="/password-verification"
          element={<PasswordVerification />}
        />
        <Route path="/password-reset" element={<PasswordReset />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
};

export default RoutesComponent;