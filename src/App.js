import React from "react";
import { Grommet } from "grommet";
import Viewport from "./Viewport";
import Party from "./Chars/Party/party.js"



function App() {
  const pcs = new Party([require(`./Chars/Party/Bornstark.json`), require(`./Chars/Party/Elfred.json`), require(`./Chars/Party/Smyler.json`), require(`./Chars/Party/Wil.json`)])
  pcs.items.push(require(`./Items/FakeLeter.json`))
  let global = require(`./GlobalTriggers.json`)
  const mytheme = {
    global: {
      colors: {
        main: "gray",
        dark1: "black",
        background: "#100d14",
        text: "#9994a1",
        brand: "red"
      }
    }
  };

  return (
    <Grommet theme={mytheme}>
      <header>_RPG Importer</header>
      <Viewport globalTriggers={global} party={pcs}/>
    </Grommet>
  );
}

export default App;
