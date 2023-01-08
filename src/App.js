import React from "react";
import {
  PlacesAutocomplete,
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import "./App.css";

function App() {
  const [address, setAddress] = React.useState("");
  const handleSelect = async (value) => {};

  return (
    <div>
      <PlacesAutocomplete
        value={address}
        onChange={setAddress}
        onSelect={handleSelect}
      >
        {" "}
        {() => <div>eeeyyyyy</div>}{" "}
      </PlacesAutocomplete>
    </div>
  );
}

export default App;
