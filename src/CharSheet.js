import React from "react";
import { Box } from 'grommet';

export default function CharSheet(props) {

  return (
    <Box>
    {props.char.name}
      <Box direction="row">
        <Box margin={{ right:"1em", left:"1em" }}>*portrait*<br />*portrait*<br />*portrait*<br />*portrait*<br />*portrait*<br /></Box>
        <Box margin={{ right: "1em", left: "1em" }}>
        <b>Body</b>
          Strength: {props.char.Body.Strength}<br/>
          Agility: {props.char.Body.Agility}<br/>
          Coordination: {props.char.Body.Coordination}<br/>
          Fitness: {props.char.Body.Fitness}
        </Box>
        <Box margin={{ right: "1em", left: "1em" }}>
          <b>Mind</b>
          Perception: {props.char.Mind.Perception}<br />
          Intelligence: {props.char.Mind.Intelligence}<br />
          Resolve: {props.char.Mind.Resolve}<br />
          Social: {props.char.Mind.Social}
        </Box>
        <Box margin={{ right: "1em", left: "1em" }}>
          <b>Soul</b>
          Essence: {props.char.Soul.Essence}<br />
          Focus: {props.char.Soul.Focus}<br />
          Reception: {props.char.Soul.Reception}
        </Box>
        *Equipment*
      </Box>
    </Box>
    );
}