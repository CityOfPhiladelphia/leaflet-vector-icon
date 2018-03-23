import { Map, TileLayer, Marker } from 'leaflet';
import { VectorMarker, Icon } from '../../src';
import '!style!css!../../src/leaflet-vector-markers.css';

const map = new Map('map').setView([48.15491,11.54183], 14)

new TileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
  detectRetina: true
}).addTo(map)

new Marker([48.15491,11.54183], {icon: new Icon({icon: 'spinner', prefix: 'fa', markerColor: '#cb4b16', spin: true}) }).addTo(map)

new Marker([48.15391,11.53283], {icon: new Icon({icon: 'rocket', prefix: 'fa', markerColor: '#002b36', iconColor: '#eee8d5'}) }).addTo(map)

new Marker([48.15391,11.52283], {icon: new Icon({icon: 'rocket', prefix: 'fa', markerColor: '#eee8d5', iconColor: '#002b36'}) }).addTo(map)
