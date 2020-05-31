import React from "react";
import { Box, Tabs, Tab } from "grommet";
import { Services } from "grommet-icons";
import CharSheet from './CharSheet.js';

function partyTabs(party) {
  let result = [];
  party.chars.forEach(element => {
    result.push(
      <Tab title={element.name}>
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
    result.push(element.name)
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
          Some sort of inventory button
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