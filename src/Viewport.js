import React, { useState } from "react";
import { Box, Header } from "grommet";
import Contextbar from "./Contextbar";
import PartyBar from "./PartyBar";
import Clock from "./Clock.js";
import { increaseTime } from "./ViewHelpers";

export default function Viewport() {
  const [node, setNode] = useState(require(`./Nodes/1A.json`));
  const [time, setTime] = useState([0, 0, 0]);

  function goTo(key) {
    if (`./Nodes/${key}.json`) {
      setNode(require(`./Nodes/${key}.json`));
    }
    else if (`./Nodes/${key}.JSON`) {
      setNode(require(`./Nodes/${key}.JSON`));
    }
    else {
      console.log("Could not find Node")
    }
  }

  function execute(input) {
    let effect = input.Effect.split(' ');

    switch (effect[0]) {
      case "GoTo":
        setTime(increaseTime(input.Time, time));
        goTo(effect[1]);
        break;
      default:
        console.log(`Command '${effect[0]}' not found`)
    }
  }

  return (
    <Box
      border={{ color: "brand", size: "large" }}
      width="100%"
      height="100%"
      direction="column"
    >
      <Box pad="medium" height="100%" background="neutral-2">
        <Header align="center"><Box>Map</Box> {node.Name} <Clock currentTime={time} /></Header>
        
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
