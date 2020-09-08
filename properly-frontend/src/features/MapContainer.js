import React, { Component } from 'react';
import { Map, GoogleApiWrapper, InfoWindow, Marker } from 'google-maps-react';

const mapStyles = {
  width: '50%',
  height: '50%'
};

export class MapContainer extends Component {

  state = {
    // Hides or the shows the infoWindow
    showingInfoWindow: false,
    //Shows the active marker upon click
    activeMarker: {},
    //Shows the infoWindow to the selected place upon a marker          
    selectedPlace: {}  
  }

  onMarkerClick = (props, marker, e) =>
  this.setState({
    selectedPlace: props,
    activeMarker: marker,
    showingInfoWindow: true
  });
  
  onClose = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      });
    }
  };

  render() {
    return (
      <Map google={this.props.google} zoom={14} style={mapStyles} initialCenter={ this.props.location }>
        <Marker onClick={this.onMarkerClick} name={this.props.address}/>
        <InfoWindow marker={this.state.activeMarker} visible={this.state.showingInfoWindow} onClose={this.onClose}>
          <div>
            <h4>{this.state.selectedPlace.name}</h4>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBxNbt9D3s4M-fK1VlU-ho-WGgTB0KV3mI"
})(MapContainer);

