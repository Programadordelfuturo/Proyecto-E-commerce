import React from 'react';

const LoadingScreen = () => {
  return (
    <div className='spinner-overlay'>
      <div className="lds-hourglass"></div>
    </div>
  );
};

export default LoadingScreen;