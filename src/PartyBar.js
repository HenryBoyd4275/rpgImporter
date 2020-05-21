import React from "react";
import { Box, Tabs, Tab } from "grommet";
import { Services } from "grommet-icons";

export default function PartyBar() {
  return (
    <Tabs margin={{ top: "-3em" }}>
      <Tab title="PartyMain">
        <Box
          pad="small"
          border={{ color: "brand", size: "large" }}
          height="6em"
          width="100%"
        >
          {" "}
          Main{" "}
        </Box>
      </Tab>
      <Tab title="Party1">
        <Box
          pad="small"
          border={{ color: "brand", size: "large" }}
          height="6em"
          width="100%"
        >
          {" "}
          One{" "}
        </Box>
      </Tab>
      <Tab title="Party2">
        <Box
          pad="small"
          border={{ color: "brand", size: "large" }}
          height="6em"
          width="100%"
        >
          {" "}
          Two{" "}
        </Box>
      </Tab>
      <Tab title="Party3">
        <Box
          pad="small"
          border={{ color: "brand", size: "large" }}
          height="6em"
          width="100%"
        >
          {" "}
          Three{" "}
        </Box>
      </Tab>
      <Tab title="Party4">
        <Box
          pad="small"
          border={{ color: "brand", size: "large" }}
          height="6em"
          width="100%"
        >
          {" "}
          Four{" "}
        </Box>
      </Tab>
      <Tab title="Party5">
        <Box
          pad="small"
          border={{ color: "brand", size: "large" }}
          height="6em"
          width="100%"
        >
          {" "}
          Five{" "}
        </Box>
      </Tab>
      <Tab title="Party6">
        <Box
          pad="small"
          border={{ color: "brand", size: "large" }}
          height="6em"
          width="100%"
        >
          {" "}
          Six{" "}
        </Box>
      </Tab>
      <Tab icon={<Services />}>
        <Box
          pad="small"
          border={{ color: "brand", size: "large" }}
          height="6em"
          width="100%"
        >
          {" "}
          Options{" "}
        </Box>
      </Tab>
    </Tabs>
  );
}
