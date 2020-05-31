import React from "react";
import { Grommet } from "grommet";
import Viewport from "./Viewport";
import Party from "./Chars/Party/party.js"



function App() {
  const pcs = new Party([require(`./Chars/Party/Bornstark.json`), require(`./Chars/Party/Elfred.json`), require(`./Chars/Party/Smyler.json`), require(`./Chars/Party/Wil.json`)])

  const mytheme = {
    global: {
      colors: {
        main: "gray",
        highlight: "black",
        background: "#100d14",
        text: "#9994a1"
      }
    }
  };

  return (
    <Grommet theme={mytheme}>
      <header>_RPG Importer</header>
      <Viewport party={pcs}/>
    </Grommet>
  );
}

export default App;
