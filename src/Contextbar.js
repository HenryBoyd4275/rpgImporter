import React from "react";
import { Box, Grid, Button } from "grommet";

export default function Contextbar(props) {

  function printOptions() {
    let result = [];
    props.currentNode.ContextActions.forEach(element => {
      console.log("here with", element);
      result.push(<Box pad="xsmall" background="background"><Button label={element.Action} onClick={() => props.execute(element)} /></Box>);
    })
    return result;
  }

  return (
    <Box
      pad="small"
      gap="large"
      border={{ color: "highlight", size: "large" }}
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
        {printOptions()}
      </Grid>
    </Box>
  );
}