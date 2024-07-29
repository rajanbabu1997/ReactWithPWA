import React, { useState, useEffect } from 'react';

const Offline = ({ children }) => {
  const [isOffline, setIsOffline] = useState(false);

  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
    };

    const handleOffline = () => {
      setIsOffline(true);
    };

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <>
      {isOffline? (
        <div className="offline-notification">
          You are currently offline.
        </div>
      ) : (
        children
      )}
    </>
  );
};

export default Offline;