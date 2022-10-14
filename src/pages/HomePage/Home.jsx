import React from "react";
import InfoSection from "../../components/InfoSection";
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from "./Date";

const Home = () => {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection {...homeObjTwo} />
      <InfoSection {...homeObjThree} />
      <InfoSection {...homeObjFour} />
    </>
  );
};

export default Home;
