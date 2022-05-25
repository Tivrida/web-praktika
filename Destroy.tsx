import React, { useContext } from "react";
import { DestroyHead } from "./DestroyHead/DestroyHead";
import { End } from "../../Tools/End/End";
import { AsteroidsContext } from "../../App";
import { CardList } from "../../Card/CardList/CardList";

export const Destroy = () => {
  document.title = "Уничтожение";

  const { state, dispatch } = useContext(AsteroidsContext);

  return (
    <>
      <DestroyHead />
      <CardList list={state.destroy} />
      <End />
    </>
  );
};

