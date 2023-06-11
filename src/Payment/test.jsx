import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Test() {
  const [myVariable, setMyVariable] = useState(500);

  const displayVariable = () => {
    alert(`The value of myVariable is: ${myVariable}`);
  };

  const handleVariableChange = (event) => {
    setMyVariable(event.target.value);
  };

  return (
    <div>
      <h5>Value of myVariable: {myVariable}</h5>
      <input type="number" value={myVariable} onChange={handleVariableChange} />
      <button onClick={displayVariable}>Show Variable</button>
     <Link to={`/another?myVariable=${myVariable}`}>go</Link> 
    </div>
  );
}

export default Test;
