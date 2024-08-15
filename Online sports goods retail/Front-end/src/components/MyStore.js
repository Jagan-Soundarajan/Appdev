import React, { useState } from 'react';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import axios from 'axios';
import mapIcon from './map.jpeg'; // Replace with the path to your icon image

// Define a custom icon
const customIcon = new L.Icon({
  iconUrl: mapIcon,
  iconSize: [32, 32], // size of the icon
  iconAnchor: [16, 32], // point of the icon which will correspond to marker's location
  popupAnchor: [0, -32] // point from which the popup should open relative to the iconAnchor
});

// LocationSearch Component
const LocationSearch = ({ onLocationFound }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = async () => {
    try {
      const response = await axios.get(`https://nominatim.openstreetmap.org/search`, {
        params: {
          q: searchTerm,
          format: 'json',
          limit: 1
        }
      });
      const location = response.data[0];
      if (location) {
        onLocationFound([parseFloat(location.lat), parseFloat(location.lon)]);
      } else {
        alert('Location not found');
      }
    } catch (error) {
      console.error('Error fetching location', error);
    }
  };

  return (
    <div style={{ margin: '20px 0', display: 'flex', alignItems: 'center' }}>
      <TextField
        variant="outlined"
        placeholder="Search location"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        fullWidth
        size="small"
        style={{ flexGrow: 1 }}
      />
      <IconButton onClick={handleSearch} style={{ marginLeft: '8px', backgroundColor:"primary"}}>
        <SearchIcon />
      </IconButton>
    </div>
  );
};

// MapUpdater Component
const MapUpdater = ({ position, zoom }) => {
  const map = useMap();
  map.setView(position, zoom);
  return null;
};

// MyStore Component
const MyStore = () => {
  const [position, setPosition] = useState([51.505, -0.09]); // Default position
  const [zoom, setZoom] = useState(13);

  const handleLocationFound = (newPosition) => {
    setPosition(newPosition);
    setZoom(10); // Zoom level after search
  };

  return (
    <Container style={{ padding: '20px', maxWidth: '1200px' }}>
      <Typography variant="h4" gutterBottom>My Store Location</Typography>
      <LocationSearch onLocationFound={handleLocationFound} />
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <MapContainer center={position} zoom={zoom} style={{ height: '300px', width: '100%' }}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='Map data © <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position} icon={customIcon}>
                <Popup>
                  My Store<br />123 Sports Avenue, Sportstown, ST 12345
                </Popup>
              </Marker>
              <MapUpdater position={position} zoom={zoom} />
            </MapContainer>
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>Address</Typography>
              <Typography variant="body1">
                123 Sports Avenue,<br />
                Sportstown, ST 12345<br />
                Phone: +91 769 591 8390
              </Typography>
              <Typography variant="h5" gutterBottom style={{ marginTop: '20px' }}>Store Hours</Typography>
              <Typography variant="body1">
                Monday - Friday: 9:00 AM - 8:00 PM<br />
                Saturday: 10:00 AM - 6:00 PM<br />
                Sunday: Closed
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default MyStore;
