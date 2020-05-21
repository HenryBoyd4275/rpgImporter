import React, { useState } from 'react';
import { Box } from 'grommet';
import Contextbar from './Contextbar';
import PartyBar from './PartyBar';

export default function Viewport() {

  const [node, setNode] = useState(require('./Nodes/1A.json'));

  console.log("Hello There");
  console.log("node:", node);

  return (
    <Box border={{ color: 'brand', size: 'large' }} width="100%" height="100%" direction="column">
      <Box pad="medium" height="100%" background="neutral-2">
        <Box pad="small" border={{ color: 'brand', size: 'large' }} width="100%" height="8em"> Description Box</Box>
        <Box height="24em"/>
        <Contextbar />
      </Box>
      <PartyBar />
    </Box>
    )
}