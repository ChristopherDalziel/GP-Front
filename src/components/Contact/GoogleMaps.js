import { Map, GoogleApiWrapper, Marker } from "google-maps-react";
import React, { Component } from "react";
import dotenv from "dotenv";

dotenv.config();

const mapStyles = {
  width: "50%"
};

export class MapContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stores: [{ latitude: 3.079274, longitude: 101.58071 }] // This is the 'marked' position on the map thats later called in displayMarkers
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
        zoom={17} // This zooms in closer to the position stated in initialCenter
        style={mapStyles}
        initialCenter={{ lat: 3.080886, lng: 101.580569 }} // This sets where the map is positioned upon page load
      >
        {this.displayMarkers()}
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY
})(MapContainer);
