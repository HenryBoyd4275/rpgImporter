import React from 'react';
import { Box, Grommet } from 'grommet';
import PartyBar from './PartyBar';
import Viewport from './Viewport';
import Contextbar from './Contextbar';

function App() {
  return (
    <Grommet plain>
      <header className="App-header">
        RPG Importer
      </header>
      <Box direction="row">
        <PartyBar/>
        <Viewport/>
      </Box>
      <Contextbar/>
    </Grommet>
  );
}

export default App;
