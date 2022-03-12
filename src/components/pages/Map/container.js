import React from "react";
//import { React, useEffect } from "react";
//import { useHistory } from "react-router-dom";
//import { useSelector, useDispatch } from "react-redux";
//import { getStartData } from "src/store/actions/person";
import Catalog from "./component";

function CatalogContainer() {
  //const dispatch = useDispatch();

  //const data = useSelector((state) => state.cards.cardList);

  //console.log(data);

  //useEffect(() => {
  //  dispatch(getStartData(1, 1));
  //}, [dispatch]);

  //let history = useHistory();
  //const searchCharacter = (event) => {
  //  if (event.key === "Enter")
  //    history.push({
  //      pathname: `/person/${characterName}`,
  //    });
  //};

  return <Catalog />;
}

export const container = CatalogContainer;
