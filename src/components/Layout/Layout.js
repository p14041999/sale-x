import React, { Children, Fragment } from 'react';

// custom
import MainPanel from '../MainPanel/MainPanel';
import Sidebar from '../Sidebar.js/Sidebar';

const Layout = ({ children }) => {
  return (
    <div className='flex min-h-screen'>
      <Sidebar />
      <MainPanel>{children}</MainPanel>
    </div>
  );
};

export default Layout;
