import React, { useContext } from "react";
import { AsteroidsContext } from "../../App";
import { End } from "../../Tools/End/End";
import { AsteroidsHead } from "./AsteroidsHead/AsteroidsHead";
import { CardList } from "../../Card/CardList/CardList";

export const Asteroids = () => {
  document.title = "Астероиды";

  const { state, dispatch } = useContext(AsteroidsContext);

  return (
    <>
      <AsteroidsHead />
      <CardList list={state.arr} />
      <End />
    </>
  );
};