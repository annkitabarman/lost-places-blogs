"use client";

import Link from "next/link";
import { MapContainer, TileLayer, CircleMarker, Popup } from "react-leaflet";
import { places } from "@/data/places";

export default function AtlasMapView() {
  return (
    <MapContainer
      center={[20, 10]}
      zoom={2}
      minZoom={2}
      scrollWheelZoom
      className="h-[550px] w-full bg-[#171813]"
      style={{ background: "#171813" }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {places.map((place) => (
        <CircleMarker
          key={place.slug}
          center={[place.coordinates.lat, place.coordinates.lng]}
          radius={7}
          pathOptions={{
            color: "#11120f",
            weight: 2,
            fillColor: "#c6a76a",
            fillOpacity: 1,
          }}
        >
          <Popup>
            <div className="min-w-40">
              <p className="font-serif text-lg">{place.name}</p>
              <p className="mt-1 text-sm">{place.location}</p>
              <p className="mt-1 text-xs">{place.period}</p>

              <Link
                href={`/places/${place.slug}`}
                className="mt-3 inline-block text-sm font-medium"
              >
                Explore this place →
              </Link>
            </div>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}
