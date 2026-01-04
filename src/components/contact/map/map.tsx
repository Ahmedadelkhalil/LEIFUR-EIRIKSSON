import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import { Link } from "react-router-dom";
import "./map.css";

const Map = () => {
  const currentDate = new Date().getFullYear();
  return (
    <div className="contact-map-container container mx-auto">
      <div className="mx-3 my-[25px] sm:my-[40px] font-bold text-boxes text-center">
        <h1 className="uppercase text-3xl sm:text-4xl font-header mb-4">
          Location
        </h1>
        <p className="capitalize tracking-wider font-paragraph font-semibold text-sm sm:text-lg location-p-statement">
          Skólavörðustígur 45 101 Reykjavík Iceland
        </p>
      </div>
      <MapContainer
        center={[64.14, -21.92]}
        zoom={13.5}
        scrollWheelZoom={false}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker
          position={[64.1401, -21.906]}
          icon={
            new Icon({
              iconUrl:
                "https://github.com/DATA-Container-100/hotel-data-imgs/blob/main/anchor-leaf-green.png?raw=true",
              shadowUrl:
                "https://github.com/DATA-Container-100/hotel-data-imgs/blob/main/anchor-shadow.png?raw=true",
              iconSize: [38, 95],
              shadowSize: [50, 64],
              iconAnchor: [22, 94],
              shadowAnchor: [4, 62],
              popupAnchor: [-3, -76],
            })
          }
        >
          <Popup>Hôtel Leifur Eiríksson.</Popup>
        </Marker>
      </MapContainer>
      <p className="text-center text-sm sm:text-lg capitalize text-boxes font-semibold font-paragraph mt-3 map-copyright-statement">
        © {currentDate}{" "}
        <Link
          to="https://github.com/Ahmedadelkhalil"
          target="_blank"
          className="underline"
        >
          Ahmed Adel
        </Link>{" "}
        all rights reserved.
      </p>
    </div>
  );
};

export default Map;
