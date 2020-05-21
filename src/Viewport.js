import React, { useState } from "react";
import { Box } from "grommet";
import Contextbar from "./Contextbar";
import PartyBar from "./PartyBar";
//import execute from './optionDriver.js';

export default function Viewport() {
  const [node, setNode] = useState(require(`./Nodes/1A.json`));

  function goTo(key) {
    setNode(require(`./Nodes/${key}.json`));
  }

  function execute(inputs) {
    let effect = inputs.Effect.split(' ');

    switch (effect[0]) {
      case "GoTo":
        goTo(effect[1]);
        break;
      default:
        console.log(`Command ${effect[0]} not found`)
    }
  }

  console.log("node:", node);

  return (
    <Box
      border={{ color: "brand", size: "large" }}
      width="100%"
      height="100%"
      direction="column"
    >
      <Box pad="medium" height="100%" background="neutral-2">
        <Box align="center">{node.Name}</Box>
        <Box
          pad="small"
          border={{ color: "brand", size: "large" }}
          width="100%"
          height="8em"
          align="center"
        >
          {node.Description}
        </Box>
        <Box height="24em" />
        <Contextbar currentNode={node} execute={execute}/>
      </Box>
      <PartyBar />
    </Box>
  );
}
