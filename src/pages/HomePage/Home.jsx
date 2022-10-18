import React from "react";
import InfoSection from "../../components/InfoSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Date";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjThree} />

      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;
