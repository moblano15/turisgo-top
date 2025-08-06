import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

// Fix para los íconos en producción
delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/markers/marker-icon-2x.png',
  iconUrl: '/markers/marker-icon.png',
  shadowUrl: '/markers/marker-shadow.png'
})

export default function Map({ places }) {
  const position = [40.4168, -3.7038] // Madrid (cambia según geolocalización)

  return (
    <MapContainer 
      center={position} 
      zoom={13} 
      className="h-[400px] rounded-xl shadow-lg"
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places.map(place => (
        <Marker key={place.id} position={[place.lat, place.lon]}>
          <Popup>{place.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
