import React from "react";
import s from "./MainContent.module.css";
import { Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { MenContent } from "./MenContent/MenContent";
import { OtherContent } from "./OtherContent/OtherContent";
import { WomenContent } from "./WomenContent/WomenContent";
export const MainContent = () => {
 
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/men">
        <MenContent/>
      </Route>
      <Route path="/other">
        <OtherContent />
      </Route>
            <Route path="/women">
        <WomenContent />
      </Route>
    </>
  );
};
