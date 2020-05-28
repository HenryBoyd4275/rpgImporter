import React from "react";
import { Box, Tabs, Tab } from "grommet";
import { Services } from "grommet-icons";

function partyTabs(party) {
  let result = [];
  party.chars.forEach(element => {
    result.push(
      <Tab title={element.name}>
        <Box
          pad="small"
          height="6em"
          width="100%"
        >
          One
        </Box>
      </Tab>)
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
          {props.party.chars.length}
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