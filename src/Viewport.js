import React, { useState } from "react";
import { Box, Header } from "grommet";
import Contextbar from "./Contextbar";
import PartyBar from "./PartyBar";

export default function Viewport() {
  const [node, setNode] = useState(require(`./Nodes/1A.json`));
  const [time, setTime] = useState([0,0,0]);

  function addTime(input) {
    let value = input.slice(0, -1);
    console.log(value, input[input.length - 1])
    let temp = time;
    switch (input[input.length - 1]) {
      case "d":
        temp[0] += 1*value;
        break;
      case "h":
        temp[1] += 1*value;
        break;
      case "m":
        temp[2] += 1*value;
        break;
    }
    if (temp[2] >= 60) {
      temp[1] += 1;
      temp[2] -= 60;
    }
    if (temp[1] >= 60) {
      temp[0] += 1;
      temp[1] -= 60;
    }
    setTime(temp);
  }

  function displayTime() {
    return time.map((element, index) => {
      if (index === 0) {
        if (element < 10) {
          return `0${element}`
        }
      }
      else {
        if (element < 10) {
          return `:0${element}`
        }
      }
    })
  }

  function goTo(key) {
    setNode(require(`./Nodes/${key}.json`));
  }

  function execute(input) {
    let effect = input.Effect.split(' ');

    switch (effect[0]) {
      case "GoTo":
        addTime(input.Time);
        goTo(effect[1]);
        break;
      default:
        console.log(`Command ${effect[0]} not found`)
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
        <Header align="center">Map {node.Name} <Box>{displayTime()}</Box></Header>
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
