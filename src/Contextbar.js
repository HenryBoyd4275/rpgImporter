import React from "react";
import { Box, Grid, Button } from "grommet";

export default function Contextbar(props) {

  function printOptions() {
    let result = [];
    props.currentNode.ContextActions.forEach((element, index) => {
      let print = true;
      if (element.If) {
        let splitIf = element.If.split(' ');
        if (!props.currentNode[splitIf[0]][splitIf[1]]) {
          print = false;
        }
      }
      if (element.Not) {
        let splitNot = element.Not.split(' ');
        if (props.currentNode[splitNot[0]][splitNot[1]]) {
          print = false;
        }
      } 
      if (print) {
        result.push(<Box key={index} pad="xsmall" background="background"><Button label={element.Action} onClick={() => props.execute(element)} /></Box>);
      }
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
          size: "auto"
        }}
        gap="small"
      >
        {printOptions()}
      </Grid>
    </Box>
  );
}