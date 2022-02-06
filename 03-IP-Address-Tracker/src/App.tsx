import React, { FormEvent, useEffect, useState } from "react";
import L, { Map } from "leaflet";
import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import PageFlex from "./components/PageFlex";
import TextInput from "./components/TextInput";
import InputContainer from "./components/InputContainer";
import SearchButton from "./components/SearchButton";
import OutputContainer from "./components/OutputContainer";
import ResultHeader from "./components/ResultHeader";
import ResultValue from "./components/ResultValue";
import ResultContainer from "./components/ResultContainer";
import ResultBar from "./components/ResultBar";
import {
  trackIp,
  selectDisplayResult,
  selectLat,
  selectLng,
} from "./features/page/pageSlice";
import { displayGeoData } from "./@types/features/pageSlice.d";

function App() {
  const dispatch = useDispatch();
  const [inputText, setInputText] = useState("");
  const [map, setMap] = useState<Map>({} as Map);
  const pageInformation: displayGeoData = useSelector(selectDisplayResult);
  const lat = useSelector(selectLat);
  const lng = useSelector(selectLng);

  useEffect(() => {
    const mapObject = L.map("map").setView([51.505, -0.09], 13);
    setMap(mapObject);
    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        tileSize: 512,
        zoomOffset: -1,
        accessToken:
          "pk.eyJ1IjoiZ29rdS1rdW4iLCJhIjoiY2t6OWg1cXl2MWpubDJ0cGtodWZiaXhiYiJ9.bFcYtmX3gql3y89h36quNQ",
      },
    ).addTo(mapObject);
  }, []);

  function onSearch(event: FormEvent) {
    event.preventDefault();
    dispatch(trackIp(inputText));
  }

  useEffect(() => {
    if (Object.keys(map).length === 0) return;

    map.panTo([lat, lng]);

    L.circle([lat, lng], {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: 1000,
    }).addTo(map);

    L.marker([lat, lng], {
      icon: L.icon({ iconUrl: "images/icon-location.svg" }),
    }).addTo(map);
  }, [lat, lng]);

  return (
    <div className="App">
      <PageFlex>
        <Header>IP Address Tracker</Header>
        <InputContainer onSubmit={(event) => onSearch(event)}>
          <TextInput
            type="text"
            placeholder="Search for any IP address or domain"
            value={inputText}
            onChange={(event) => setInputText(event.target.value)}
          />
          <SearchButton type="submit">
            <img src="images/icon-arrow.svg" alt="" />
          </SearchButton>
        </InputContainer>
        <OutputContainer>
          {Object.entries(pageInformation).map(([key, value], index) => (
            <React.Fragment key={new Date().getTime() + key}>
              <ResultContainer>
                <ResultHeader>{key.toUpperCase()}</ResultHeader>
                <ResultValue>{value}</ResultValue>
              </ResultContainer>
              {index !== 3 && <ResultBar />}
            </React.Fragment>
          ))}
        </OutputContainer>
      </PageFlex>
    </div>
  );
}

export default App;
