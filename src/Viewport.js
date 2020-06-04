//main viewport that hold a lot of things. Should probabyl spliut off some more functions to help

import React, { useState } from "react";
import { Box, Header, Image } from "grommet";
import Contextbar from "./Contextbar";
import PartyBar from "./PartyBar";
import Clock from "./Clock.js";
import { increaseTime, addDescription, checkAll, checkOne } from "./ViewHelpers";

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

  function check() {
    let result = [];
    if (node.Check && !node.Checked) {
      node.Check.forEach(element => {
        let effect = element.Trigger.split(' ');
        switch (effect[0]) {
          case "Check":
            checkOne(effect[1], effect[2], effect[3], props.party, node, element.Result);
            break;
          case "CheckAll":
            checkAll(effect[1], effect[2], effect[3], props.party, node, element.Result);
            break;
          default:
            console.log(`I don't know how to ${element}`);
        }
      })
    }
    return result;
  }

  function executeSingle(input, inputTime) {
    let effect = input.split(' ');
    switch (effect[0]) {
      case "GoTo":
        setTime(increaseTime(inputTime, time));
        goTo(effect[1]);
        break;
      case "Show":
        setTime(increaseTime(inputTime, time));
        node.Show[effect[1]] = true;
        setRender(render + 1);
        break;
      case "Hide":
        setTime(increaseTime(inputTime, time));
        node.Show[effect[1]] = false;
        setRender(render + 1);
        break;
      case "Get":
        props.party.items.push(require(`./Items/${effect[1]}`));
        break;
      default:
        console.log(`Command '${effect[0]}' not found`);
    }
  }

  function executeMultiple(input){
    input.Effect.forEach(element => {
      executeSingle(element, input.Time);
    })
  }

  function execute(input) {
    if (Array.isArray(input.Effect)) {
      executeMultiple(input)
    } else {
      executeSingle(input.Effect, input.Time);
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
        <Header align="center"><Box>*Map Button here?*</Box> {node.Name} <Clock currentTime={time} /></Header>
        <Box
          pad="small"
          border={{ color: "highlight", size: "large" }}
          width="100%"
          height="11em"
          align="center"
        >
          {node.Description}
          {check(node)}
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
