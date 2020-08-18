//The Index component will hold all other components
import React from "react";
import Tracks from "../tracks/Tracks";
import Search from "../tracks/Search";

function Index() {
  return (
    <React.Fragment>
      <Search />
      <Tracks />
    </React.Fragment>
  );
}

export default Index;
