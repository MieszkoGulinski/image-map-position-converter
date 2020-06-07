import React, { useState, useCallback } from 'react';
import SourceMap from './SourceMap';
import DestinationMap from './DestinationMap';

const MainElem = () => {
  const [destinationVisible, setDestinationVisible] = useState(false);
  const showSource = useCallback(() => setDestinationVisible(false), [setDestinationVisible]);
  const showDestination = useCallback(() => setDestinationVisible(true), [setDestinationVisible]);

  return (
    <div>
      <button onClick={showSource}>Source map</button>
      <button onClick={showDestination}>Destination map</button>
      {destinationVisible? (
        <DestinationMap />
      ) : (
        <SourceMap />
      )}
    </div>
  );
};

export default MainElem;
