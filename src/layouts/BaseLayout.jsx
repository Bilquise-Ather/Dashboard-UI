import React from 'react';
import Sidenav from '../components/Sidenav';

const BaseLayout = ({ Children }) => {
  return (
    <>
      <Sidenav />
      <Children />
    </>
  );
};

export default BaseLayout;
