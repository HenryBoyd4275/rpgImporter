import React, { useState } from "react";
import { Box, Header, Image } from "grommet";
import Contextbar from "./Contextbar";
import PartyBar from "./PartyBar";
import Clock from "./Clock.js";
import { increaseTime } from "./ViewHelpers";

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

  function setShowArray(effect) {
    let result = [];
    for (let i=1; i < effect.length; i++) {
      result.push(effect[i]);
    }
    return result;
  }

  function addDescription() {
    let result = [];
    if (node.Additional) {
      node.Additional.forEach((element, index) => {
        if (node.Show[index]) {
          result.push(<br />)
          result.push(element);
        }
      })
    }
    return result;
  }

  function execute(input) {
    let effect = input.Effect.split(' ');

    switch (effect[0]) {
      case "GoTo":
        setTime(increaseTime(input.Time, time));
        goTo(effect[1]);
        break;
      case "Show":
        console.log(node.Show)
        node.Show[effect[1]] = true;
        setRender(render+1);
        console.log(node.Show)
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
          height="10em"
          align="center"
        >
          {node.Description}
          {addDescription()}
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
