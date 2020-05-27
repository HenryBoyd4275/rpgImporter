import React from "react";
import { Box } from 'grommet';

export default function Clock(props) {

  function displayTime() {
    return props.currentTime.map((element, index) => {
      if (index === 0) {
        if (element < 10) {
          return `0${element}`
        } else {
          return `${element}`
        }
      }
      else {
        if (element < 10) {
          return `:0${element}`
        } else {
          return `:${element}`
        }
      }
    })
  }

  return (
    <Box>{displayTime()}</Box>
  );

}