//Displays Character information. Nothing here causes a render.

import React from "react";
import { Box, Image } from 'grommet';

export default function CharSheet(props) {

  return (
    <Box>
      <Box direction="row">
        <Box margin={{ right: "1em", left: "1em" }}><Image src={props.char.portrait} fit="cover"/></Box>
        <Box margin={{ right: "1em", left: "1em" }}>
        <b>Body</b>
          Strength: {props.char.Attributes.Strength}<br/>
          Agility: {props.char.Attributes.Agility}<br/>
          Coordination: {props.char.Attributes.Coordination}<br/>
          Fitness: {props.char.Attributes.Fitness}
        </Box>
        <Box margin={{ right: "1em", left: "1em" }}>
          <b>Mind</b>
          Perception: {props.char.Attributes.Perception}<br />
          Intelligence: {props.char.Attributes.Intelligence}<br />
          Resolve: {props.char.Attributes.Resolve}<br />
          Social: {props.char.Attributes.Social}
        </Box>
        <Box margin={{ right: "1em", left: "1em" }}>
          <b>Soul</b>
          Essence: {props.char.Attributes.Essence}<br />
          Focus: {props.char.Attributes.Focus}<br />
          Reception: {props.char.Attributes.Reception}
        </Box>
        *Equipment*
      </Box>
    </Box>
    );
}