import React, { useState } from "react";
import { Box, Header, Image } from "grommet";
import Contextbar from "./Contextbar";
import PartyBar from "./PartyBar";
import Clock from "./Clock.js";
import { increaseTime } from "./ViewHelpers";

export default function Viewport(props) {
  const [node, setNode] = useState(require(`./Nodes/1A.json`));
  const [time, setTime] = useState([0, 0, 0]);

  function goTo(key) {
    if (`./Nodes/${key}.json`) {
      setNode(require(`./Nodes/${key}.json`));
    }
    else {
      console.log("Could not find Node");
    }
  }

  function execute(input) {
    let effect = input.Effect.split(' ');

    switch (effect[0]) {
      case "GoTo":
        setTime(increaseTime(input.Time, time));
        goTo(effect[1]);
        break;
      case "Get":
        props.party.items.push(require(`./Items/${effect[1]}`));
        console.log("letter?:",props.party.items[0].name);
        break;
      default:
        console.log(`Command '${effect[0]}' not found`)
    }
  }

  return (
    <Box
      border={{ color: "highlight", size: "large" }}
      width="100%"
      height="100%"
      direction="column"
    >
      <Box pad="medium" height="100%" background="background">
        <Header align="center"><Box>Map</Box> {node.Name} <Clock currentTime={time} /></Header>
        <Box
          pad="small"
          border={{ color: "highlight", size: "large" }}
          width="100%"
          height="8em"
          align="center"
        >
          {node.Description}
        </Box>
        <Box height="18em" >
          <Image src={node.Image}/>
        </Box>
        <Contextbar currentNode={node} execute={execute}/>
      </Box>
      <PartyBar party={props.party}/>
    </Box>
  );
}
