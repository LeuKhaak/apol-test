import React from "react";
import * as styles from "./styles.module.scss";

function MapPage({ usersList, changeCoords }) {
  window.ymaps.ready(init);
  let myMap;
  function init() {
    if (!usersList.length) return;
    myMap = new window.ymaps.Map("map", {
      center: [52.1, 23.8],
      zoom: 7,
    });

    const myPin = new window.ymaps.GeoObjectCollection({}, { draggable: true });
    const marks = [];
    usersList.forEach((el, ind) => {
      if (!el[6] || el[6][1] === "") return;
      let myPlacemark = new window.ymaps.Placemark([+el[6][1], +el[7][1]], {
        hintContent: el[2][1] + " <br/>" + el[1][1],
        balloonContent: "",
      });

      myPlacemark.events.add("dragend", function (e) {
        const thisPlacemark = e.get("target");
        let coords = thisPlacemark.geometry.getCoordinates();
        changeCoords(ind, coords[0], coords[1]);
        thisPlacemark.properties.set("balloonContent", coords);
      });
      marks.push(myPlacemark);
    });

    marks.forEach((el) => {
      myPin.add(el);
    });
    myMap.geoObjects.add(myPin);
  }

  return (
    <div className={styles.map}>
      <div className={styles.mapWrapper} id="map"></div>
    </div>
  );
}

export default MapPage;
