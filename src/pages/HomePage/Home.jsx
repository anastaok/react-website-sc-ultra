import React from "react";
import InfoSection from "../../components/InfoSection";
import Pricing from "../../components/Pricing";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Date";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />
      <Pricing />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;
