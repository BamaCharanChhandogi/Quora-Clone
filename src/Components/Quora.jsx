import React from 'react';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Navigtationbar from './Navigtationbar';

function Quora() {
  return (
    <div className='Quora min-h-screen bg-gray-100' id='quora'>
      <Navigtationbar />
      <div className="quora-content flex justify-center mt-10 md:mt-50">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default Quora;
