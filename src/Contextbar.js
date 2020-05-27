import React from "react";
import { Box, Grid, Button } from "grommet";

export default function Contextbar(props) {
 
  return (
    <Box
      pad="small"
      gap="large"
      border={{ color: "brand", size: "large" }}
      height="8em"
      width="100%"
      margin={{ bottom: "2em" }}
    >
      <Grid
        rows={["fill"]}
        columns={{
          count: props.currentNode.ContextActions.length,
          size: "auto"
        }}
        gap="small"
      >
        {props.currentNode.ContextActions[0] && <Box pad="xsmall" background="brand"><Button label={props.currentNode.ContextActions[0].Action} onClick={() => props.execute(props.currentNode.ContextActions[0])}/></Box>}
        {props.currentNode.ContextActions[1] && <Box pad="xsmall" background="brand"><Button label={props.currentNode.ContextActions[1].Action} onClick={() => props.execute(props.currentNode.ContextActions[1])}/></Box>}
        {props.currentNode.ContextActions[2] && <Box pad="xsmall" background="brand"><Button label={props.currentNode.ContextActions[2].Action} onClick={() => props.execute(props.currentNode.ContextActions[2])}/></Box>}
        {props.currentNode.ContextActions[3] && <Box pad="xsmall" background="brand"><Button label={props.currentNode.ContextActions[3].Action} onClick={() => props.execute(props.currentNode.ContextActions[3])}/></Box>}
        {props.currentNode.ContextActions[4] && <Box pad="xsmall" background="brand"><Button label={props.currentNode.ContextActions[4].Action} onClick={() => props.execute(props.currentNode.ContextActions[4])}/></Box>}
        {props.currentNode.ContextActions[5] && <Box pad="xsmall" background="brand"><Button label={props.currentNode.ContextActions[5].Action} onClick={() => props.execute(props.currentNode.ContextActions[5])}/></Box>}

      </Grid>
    </Box>
  );
}