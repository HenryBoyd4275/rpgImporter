//bottom UI element that holds character sheets and such

import React from "react";
import { Box, Tabs, Tab, Anchor } from "grommet";
import { Services } from "grommet-icons";
import CharSheet from './CharSheet.js';

function partyTabs(party) {
  let result = [];
  party.chars.forEach((element, index)=> {
    result.push(
      <Tab key={index} title={element.name}>
        <Box
          pad="small"
          width="100%"
        >
          <CharSheet char={element}/>
        </Box>
      </Tab>)
  })
  return result;
}


function printInventory(party) {
  let result = [];
  party.items.forEach(element => {
    result.push(<Anchor key={element} color="brand"><span title={element.Description}>{element.name}</span></Anchor>)
  })
  return result;
}


export default function PartyBar(props) {

    return (
    <Tabs margin={{ top: "-3em" }}>
      <Tab title="PartyMain">
        <Box
          pad="small"
          height="6em"
          width="100%"
        >
          Items: {printInventory(props.party)}  
        </Box>
      </Tab>
      {partyTabs(props.party)}
      <Tab icon={<Services />}>
        <Box
          pad="small"
          height="6em"
          width="100%"
        >
        </Box>
      </Tab>
    </Tabs>
  );
}