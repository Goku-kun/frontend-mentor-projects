import React, { FormEvent, useEffect, useState } from "react";
import L from "leaflet";
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

const testResponse: any = {
  "ip Address": "192.168.201.121",
  location: "Brooklyn, NY 10001",
  timezone: "UTC - 05:00",
  isp: "SpaceX Starlink",
};

function App() {
  const [inputText, setInputText] = useState("");

  useEffect(() => {
    const map = L.map("map").setView([51.505, -0.09], 13);

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
          "pk.eyJ1IjoiZ29rdS1rdW4iLCJhIjoiY2t6OWllbm5hMTVvejJ2czg5ZHdzajduOSJ9.-gfYbQ-0BwFfog_VZgc-tg",
      },
    ).addTo(map);

    L.circle([51.505, -0.11], {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: 1000,
    }).addTo(map);
  }, []);

  function onSearch(event: FormEvent) {
    event.preventDefault();

    // TODO code for searching the IP Address
  }

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
          {Object.keys(testResponse).map((value, index) => (
            <React.Fragment key={new Date().getTime() + value}>
              <ResultContainer>
                <ResultHeader>{value.toUpperCase()}</ResultHeader>
                <ResultValue>{testResponse[value]}</ResultValue>
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
