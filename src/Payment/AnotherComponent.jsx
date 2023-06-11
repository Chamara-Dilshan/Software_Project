import React from 'react';
import { useLocation } from 'react-router-dom';

function AnotherComponent() {
  const location = useLocation();
  const myVariable = new URLSearchParams(location.search).get('myVariable');

  return (
    <div>
      <h5>Value of myVariable in AnotherComponent: {myVariable}</h5>
    </div>
  );
}

export default AnotherComponent;