import Notes from "./Notes";
import React from "react";

const Home = (props) => {
  return (
    <>
      <Notes showAlert={props.showAlert} />
    </>
  );
};

export default Home;
