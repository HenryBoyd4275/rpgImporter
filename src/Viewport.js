import React, { useState } from "react";
import { Box, Header, Image } from "grommet";
import Contextbar from "./Contextbar";
import PartyBar from "./PartyBar";
import Clock from "./Clock.js";
import { increaseTime, addDescription } from "./ViewHelpers";

export default function Viewport(props) {
  const [node, setNode] = useState(require(`./Nodes/1A.json`));
  const [time, setTime] = useState([0, 0, 0]);
  const [render, setRender] = useState(0);

  function goTo(key) {
    if (`./Nodes/${key}.json`) {
      setNode(require(`./Nodes/${key}.json`));
    }
    else {
      console.log("Could not find Node");
    }
  }

  function conditionalDescription() {
    let result = [];
    if (node.Conditional) {
      node.Conditional.forEach((element, index) => {
        execute(element.Trigger);
      })
    }
    return result;
  }

  function execute(input) {
    let effect = "";
    if (input.Effect) {
      effect = input.Effect.split(' ');
    } else {
      effect = input.split(' ');
    }
    switch (effect[0]) {
      case "Check":
        //if ( 3d6 < (props.party.bestAttribute(effect[1])) + effect[2]) { do a thing } else { do a different thing }
        break;
      case "GoTo":
        setTime(increaseTime(input.Time, time));
        goTo(effect[1]);
        break;
      case "Show":
        node.Show[effect[1]] = true;
        setRender(render+1);
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
          height="11em"
          align="center"
        >
          {node.Description}
          {conditionalDescription(node)}
          {addDescription(node)}
        </Box>
        <Box height="18em" >
          <Image src={node.Image} fit="contain"/>
        </Box>
        <Contextbar currentNode={node} execute={execute}/>
      </Box>
      <PartyBar party={props.party}/>
    </Box>
  );
}
