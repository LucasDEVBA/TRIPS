import Button from "@/components/Button";
import Image from "next/image";
import React from "react";

interface TripLocationProps {
  location: string;
  locationDescription: string;
}

const TripLocation = ({ location, locationDescription }: TripLocationProps) => {
  return (
    <div className="p-5">
      <h2 className="font-semibold text-primaryDarker mb-5">Localização</h2>
      <div className="relative h-[250px] w-full">
        <Image
          src={"/map-mobile.png"}
          alt={location}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-lg shadow-md"
        />
      </div>
      <h3 className="text-sm font-semibold text-primaryDarker mt-3">
        {location}
      </h3>
      <p className="text-xs text-primaryDarker mt-2 leading-5">
        {locationDescription}
      </p>
      <Button className="w-full mt-5" variant="outlined">
        Ver no Google Maps
      </Button>
    </div>
  );
};
export default TripLocation;
