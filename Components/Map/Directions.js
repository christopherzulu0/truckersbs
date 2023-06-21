import React, { useState } from 'react';

export default function Directions() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');

  const handleOriginChange = (event) => {
    setOrigin(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  return (
     <div>
      <label>
        Origin:
        <input type="text" value={origin} onChange={handleOriginChange} />
      </label>
      <label>
        Destination:
        <input
          type="text"
          value={destination}
          onChange={handleDestinationChange}
        />
      </label>
    </div>
  )
}
