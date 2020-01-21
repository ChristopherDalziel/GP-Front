import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React, { Component } from "react";
import dotenv from "dotenv";

dotenv.config();

const mapStyles = {
  width: "50%",
  height: "90%"
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{ latitude: 3.079274, longitude: 101.58071 }]
    };
  }

  displayMarkers = () => {
    return this.state.stores.map((store, index) => {
      return (
        <Marker
          key={index}
          id={index}
          position={{
            lat: store.latitude,
            lng: store.longitude
          }}
          onClick={() => console.log("You clicked me!")}
        />
      );
    });
  };

  render() {
    return (
      <Map
        google={this.props.google}
        zoom={17}
        style={mapStyles}
        initialCenter={{ lat: 3.080886, lng: 101.580569 }}
      >
        {this.displayMarkers()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer);
